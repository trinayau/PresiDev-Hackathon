from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import Permission

from .models import UserExtended, Order, Item, OrderItems, Category, Organisation, FavItem, Status
from .serializers import UserExtendedSerializer, OrderSerializer, ItemSerializer, CategorySerializer, FavItemSerializer, OrderItemsSerializer, StatusSerializer


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
        "patch"
    ]        

    def get_queryset(self):
        
        # get user org type
        user = self.request.user
        profile = UserExtended.objects.get(user=user)
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

class StatusViewSet(viewsets.ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get"]

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

class FavItemViewSet(viewsets.ModelViewSet):
    queryset = FavItem.objects.all()
    serializer_class = FavItemSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get", "post", "delete"]

    def get_queryset(self):
        queryset = FavItem.objects.all()
        user = self.request.user
        if user.id is not None:
            return queryset.filter(user__id=user.id)
        return queryset
    
    def create(self, request, *args, **kwargs):
        user = self.request.user
        item_id = self.request.data.get("item")
        print(item_id, "item id!!!!")
        item = Item.objects.get(id=item_id)
        # check if item is already favourited by self.request.user:
        if FavItem.objects.filter(user=user, item=item).exists():
            return Response({"message": "Item already favourited!"})
        else: 
            fav_item = FavItem.objects.create(user=user, item=item)
            fav_item.save()
            return Response({"message": "Item Favourited!"})

    def destroy(self, request, *args, **kwargs):
        user = self.request.user
        # get item id from url:
        item_id = self.kwargs["pk"]
        print(item_id, "item id!!!!")
        item = Item.objects.get(id=item_id)
        # check if item is already favourited by self.request.user:
        if FavItem.objects.filter(user=user, item=item).exists():
            fav_item = FavItem.objects.get(user=user, item=item)
            fav_item.delete()
            return Response({"message": "Item Unfavourited!"})
        else:
            return Response({"message": "Error, item not favourited!"})


# get all previously ordered items by user
class UserOrderItemsViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get"]

    def get_queryset(self):
        user = self.request.user
        profile = UserExtended.objects.get(user__id=user.id)
        queryset = Item.objects.all()
        # get all orders for user's organisation
        orders = Order.objects.filter(owner=profile.organisation.id)
        # for each order, get all items:
        items = []
        for order in orders:
            # find OrderItems with order=order.id
            order_items = OrderItems.objects.filter(order=order.id)
            for order_item in order_items:
                if order_item != None:
                    # get item from order_item:
                    item = Item.objects.get(id=order_item.item.id)
                    items.append(item)

        return items
