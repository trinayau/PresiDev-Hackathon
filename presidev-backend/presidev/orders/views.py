from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import UserExtended, Order, Item
from .serializers import UserExtendedSerializer, OrderSerializer, ItemSerializer


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

class SingleUserViewSet(viewsets.ModelViewSet):
    queryset = UserExtended.objects.all()
    serializer_class = UserExtendedSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get"]

    def get_queryset(self):

        queryset = UserExtended.objects.all()
        user_id = self.request.query_params.get("user_id")
        # for some reason, the user_id in the jWT is the email
        if user_id is not None:
            return queryset.filter(email=user_id)
        return queryset

    def get_queryset(self):

        queryset = UserExtended.objects.all()
        user_id = self.request.query_params.get("user_id")
        if user_id is not None:
            return queryset.filter(id=user_id)
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

        queryset = Order.objects.all()
        order_id = self.request.query_params.get("order_id")
        organisation_id = self.request.query_params.get("organisation_id")

        if order_id is not None:
            return queryset.filter(id=order_id)
        elif organisation_id is not None:
            return queryset.filter(organisation__id=organisation_id)

        return queryset


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ["get", "post", "put", "delete"]
    