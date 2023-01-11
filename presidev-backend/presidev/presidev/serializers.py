from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.renderers import JSONRenderer
from django.forms.models import model_to_dict

from orders import models
from orders import serializers

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        user_extended_serialized = None

        try:
            user_extended = models.UserExtended.objects.get(user__id=user.id)
            user_extended_serialized = serializers.UserExtendedSerializer(user_extended).data
        except:
            pass

        # Add custom claims
        token['name'] = user.username
        token['profile'] = user_extended_serialized
        token['email'] = user.email
        return token
