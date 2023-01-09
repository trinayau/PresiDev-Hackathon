from django.db import models
from django.contrib.auth.models import User

class Status(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)


class OrganisationType(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)
    description = models.CharField(max_length=256, null=False, blank=False)


class UserType(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)
    description = models.CharField(max_length=256, null=False, blank=False)


class Location(models.Model):
    country = models.CharField(max_length=128, null=False, blank=False)


class Organisation(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)
    description = models.CharField(max_length=256, null=False, blank=False)
    verified = models.BooleanField(default=False)
    organisation_type = models.ForeignKey(OrganisationType, on_delete=models.CASCADE)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)


class Category(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)


class Order(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)
    description = models.CharField(max_length=256, null=False, blank=False)
    status = models.ForeignKey(Status, on_delete=models.CASCADE)
    owner = models.ForeignKey(Organisation, on_delete=models.CASCADE)


class Item(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)
    description = models.CharField(max_length=256, null=False, blank=False)
    image_url = models.URLField(null=True, blank=True)
    orders = models.ManyToManyField(Order, through='OrderItems')
    categories = models.ManyToManyField(Category)


class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField()


class ItemPricing(models.Model):
    quantity = models.IntegerField()
    cost = models.FloatField()
    item = models.ForeignKey(Item, on_delete=models.CASCADE)


"""

    hub id
    items that are sent need ids
    each user in the chain needs to be associated with other groups
    admin profile

"""
