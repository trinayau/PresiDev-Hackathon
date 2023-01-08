# serializer for orders
from rest_framework import serializers
from .models import Order, Item
from django.contrib.auth import get_user_model
User = get_user_model()

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
    
    def create(self, validated_data):
        user = self.context['request'].user
        order = Order.objects.create(user=user, **validated_data)
        return order
    
    def get_orders(self, obj):
        return Order.objects.filter(user=obj)
    

    
