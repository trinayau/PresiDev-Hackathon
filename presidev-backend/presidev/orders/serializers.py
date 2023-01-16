from rest_framework import serializers
from .models import UserExtended, Order, Item, Category, FavItem, OrderItems, Status

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
        try: 
            request_type = request.query_params['accept']
            user = None
            if request and hasattr(request, "user"):
                user = request.user
                profile = UserExtended.objects.get(user=user)
                organisation = profile.organisation
                instance.operational_hub = organisation
                instance.status = Status.objects.get(pk=2)
                instance.save()

            return instance
        
        except:
            pass

        try:
            request_type = request.query_params['status']
            new_status = Status.objects.get(pk=request_type)
            instance.status = new_status
            instance.save()
            
            return instance
        
        except:
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

class StatusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Status
        fields = '__all__'
        depth = 1
