from django.urls import path
from .views import get_user_orders
app_name = 'orders'

urlpatterns = [
    path('orders/', get_user_orders, name='my_orders'),
]
