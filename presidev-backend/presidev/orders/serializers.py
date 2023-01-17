from rest_framework import serializers
from .models import UserExtended, Order, Item, Category, FavItem, OrderItems, Status

class UserExtendedSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserExtended
        fields = ['user', 'phone', 'location', 'user_type', 'organisation']
        depth = 2



class OrderItemsSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderItems
        fields = ['item', 'quantity']
        depth = 2


class OrderItemsSupplierSerializer(serializers.ModelSerializer):

    id = serializers.IntegerField(source='item.id')
    item_name = serializers.CharField(source='item.name')
    item_description = serializers.CharField(source='item.name')
    item_image_url = serializers.CharField(source='item.description')
    item_url = serializers.CharField(source='item.url')
    item_category = serializers.CharField(source='item.categories.name')
    item_quantity = serializers.CharField(source='quantity')
    order_name = serializers.CharField(source='order.name')
    order_status = serializers.CharField(source='order.status')
    order_created_at = serializers.CharField(source='order.created_at')
    operational_hub = serializers.CharField(source='order.operational_hub')

    class Meta:
        model = OrderItems
        # fields = ['item', 'quantity', 'order']
        fields = [
            "id",
            "item_name",    
            "item_description", 
            "item_image_url",   
            "item_url", 
            "item_category",    
            "item_quantity",    
            "order_name",   
            "order_status", 
            "order_created_at", 
            "operational_hub"
        ]
        depth = 3


class OrderSerializer(serializers.ModelSerializer):

    items = OrderItemsSerializer(source='orderitems_set', many=True)

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

class StatusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Status
        fields = '__all__'
        depth = 1
