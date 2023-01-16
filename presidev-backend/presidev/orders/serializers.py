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

    def update(self, instance, validated_data):

        # if a user accepts an order
        request = self.context.get("request")
        if (request.query_params['accept'] is not None):
            print('here')
            user = None
            if request and hasattr(request, "user"):
                user = request.user
                profile = UserExtended.objects.get(user=user)
                organisation = profile.organisation
                instance.operational_hub = organisation
                instance.save()

            return instance
        
        return instance


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
