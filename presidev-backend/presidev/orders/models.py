from django.db import models
from django.contrib.auth.models import User


class Status(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)


class UserType(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)
    description = models.CharField(max_length=256, null=False, blank=False)


class Location(models.Model):
    street_number = models.CharField(max_length=64, null=False)
    first_line = models.CharField(max_length=64, null=False)
    second_line = models.CharField(max_length=64, null=False)
    county = models.CharField(max_length=64, null=False)
    country = models.CharField(max_length=128, null=False, blank=False)
    postcode = models.CharField(max_length=64, null=False)


class OrganisationType(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)
    description = models.CharField(max_length=256, null=False, blank=False)


class UserExtended(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=64, null=True)
    location = models.ForeignKey(Location)


class Category(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)


class Item(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)
    description = models.CharField(max_length=256, null=False, blank=False)
    image_url = models.URLField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    categories = models.ManyToManyField(Category)


class Organisation(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)
    description = models.CharField(max_length=256, null=False, blank=False)
    verified = models.BooleanField(default=False)
    organisation_type = models.ForeignKey(OrganisationType, on_delete=models.CASCADE)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    organisation_items = models.ManyToManyField(Item, through="OrganisationItem")


class OrganisationItem(models.Model):
    organisation = models.ForeignKey(Organisation, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)


class Order(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)
    description = models.CharField(max_length=256, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    status = models.ForeignKey(Status, on_delete=models.CASCADE)
    owner = models.ForeignKey(Organisation, on_delete=models.CASCADE)
    orders = models.ManyToManyField(Item, through="OrderItems")


class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField()


class ItemPricing(models.Model):
    quantity = models.IntegerField()
    cost = models.FloatField()
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
