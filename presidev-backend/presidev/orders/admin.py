from django.contrib import admin
from .models import Organisation, ItemPricing, Location, Order, OrganisationType, User, UserType, Category, Item, Status, OrderItems, OrganisationItem, UserExtended

# Register your models here.
admin.site.register(Organisation)
admin.site.register(ItemPricing)
admin.site.register(Location)
admin.site.register(Order)
admin.site.register(OrganisationType)
admin.site.register(UserType)
admin.site.register(Category)
admin.site.register(Item)
admin.site.register(Status)
admin.site.register(OrderItems)
admin.site.register(OrganisationItem)
admin.site.register(UserExtended)