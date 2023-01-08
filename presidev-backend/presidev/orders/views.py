from django.shortcuts import render
from .models import Order
from .serializers import OrderSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['GET'])
def get_user_orders(request):
    user = request.user
    orders = Order.objects.filter(user=user)
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)

