from rest_framework import serializers
from .models import UserExtended, Order, Item, Category, FavItem, OrderItems

class UserExtendedSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserExtended
        fields = ['user', 'phone', 'location', 'user_type', 'organisation']
        depth = 2

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
        depth = 2


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = '__all__'
        depth = 1

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'
        depth = 1
class FavItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = FavItem
        fields = '__all__'
        depth = 1

class OrderItemsSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderItems
        fields = '__all__'
        depth = 1
