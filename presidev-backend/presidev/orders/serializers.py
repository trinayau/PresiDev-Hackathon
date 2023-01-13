from rest_framework import serializers
from .models import UserExtended, Order, Item

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
