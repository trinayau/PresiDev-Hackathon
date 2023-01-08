from django.contrib import admin

# Register your models here.
from .models import Order, Item, OrderItems, Status, OrganisationType, UserType, Location, Organisation, Category, ItemPricing
admin.site.register(Order)
admin.site.register(Item)
admin.site.register(OrderItems)
admin.site.register(Organisation)
