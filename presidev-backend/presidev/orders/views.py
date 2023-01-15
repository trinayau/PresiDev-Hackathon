from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import UserExtended, Order, Item, Category, Organisation
from .serializers import UserExtendedSerializer, OrderSerializer, ItemSerializer, CategorySerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserExtended.objects.all()
    serializer_class = UserExtendedSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get"]

    def get_queryset(self):

        queryset = UserExtended.objects.all()
        user_type = self.request.query_params.get("user_type")
        # pop off the / at the end of the url
        user_type = user_type[:-1]
        if user_type is not None:
            return queryset.filter(user_type__name=user_type)
        return queryset

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = [
        "get",
        "post",
        "put",
        "delete",
    ]

    def get_queryset(self):
        
        # get user org type
        user = self.request.user
        profile = UserExtended.objects.get(user__id=user.id)

        queryset_all = Order.objects.all()


        # if end user...
        if (profile.organisation.organisation_type.name == "End User"):
            # filter only orders associated with the users organisation
            queryset = queryset_all.filter(owner=profile.organisation.id)
            return queryset

        # if operational hub...
        elif (profile.organisation.organisation_type.name == "Operational Hub"):
            # list of linked organisations
            linked_orgnaisations = Organisation.objects.filter(linked_organisations=profile.organisation.id)
            # list of orders from linked organisations
            queryset = queryset_all.filter(owner__in=linked_orgnaisations)
            return queryset



class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get", "post", "put", "delete"]

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get", "post", "put", "delete"]

class SingleCategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get"]

    def get_queryset(self):

        queryset = Category.objects.all()
        category_id = self.request.query_params.get("category_id")
        if category_id is not None:
            return queryset.filter(id=category_id)
        return queryset

class ItemCategoryViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get"]

    def get_queryset(self):

        queryset = Item.objects.all()
        category_id = self.request.query_params.get("category_id")
        category_id = category_id[:-1]
        print(category_id)
        if category_id is not None:
            return queryset.filter(categories__id=category_id)
        return queryset
