from django.db import models
from django.contrib.auth.models import User


class Status(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)

    def __str__(self):
       return self.name

class Location(models.Model):
    street_number = models.CharField(max_length=64, null=False, blank=True)
    first_line = models.CharField(max_length=64, null=False, blank=True)
    second_line = models.CharField(max_length=64, null=False, blank=True)
    county = models.CharField(max_length=64, null=False, blank=True)
    country = models.CharField(max_length=128, null=False, blank=False)
    postcode = models.CharField(max_length=64, null=False, blank=False)

    def __str__(self):
       return self.country + ' - ' + self.postcode

class OrganisationType(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)
    description = models.CharField(max_length=256, null=False, blank=False)

    def __str__(self):
       return self.name


class UserType(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)
    description = models.CharField(max_length=256, null=False, blank=False)

    def __str__(self):
       return self.name

class Category(models.Model):
    name = models.CharField(max_length=128, null=True, blank=True)
    description = models.CharField(max_length=256, blank=True, null=True)
    img_url = models.URLField(null=True, blank=True)

    def __str__(self):
       return self.name


class Item(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)
    description = models.CharField(max_length=256, null=False, blank=False)
    image_url = models.URLField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    categories = models.ManyToManyField(Category)
    url = models.CharField(max_length=256, null=True)

    def __str__(self):
       return self.name


class Organisation(models.Model):
    name = models.CharField(max_length=128, null=False, blank=False)
    description = models.CharField(max_length=256, null=False, blank=False)
    verified = models.BooleanField(default=False)
    organisation_type = models.ForeignKey(OrganisationType, on_delete=models.CASCADE)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    organisation_items = models.ManyToManyField(Item, through="OrganisationItem")

    def __str__(self):
       return self.name


class UserExtended(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, unique=True)
    phone = models.CharField(max_length=64, null=True)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, null=True)
    user_type = models.ForeignKey(UserType, on_delete=models.PROTECT, null=True)
    organisation = models.ForeignKey(Organisation, on_delete=models.CASCADE, null=True)

    def __str__(self):
       return self.user.username


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
    items = models.ManyToManyField(Item, through="OrderItems")

    def __str__(self):
       return self.owner.name + ' - ' + self.name


class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField()


class ItemPricing(models.Model):
    quantity = models.IntegerField()
    cost = models.FloatField()
    item = models.ForeignKey(Item, on_delete=models.CASCADE)


