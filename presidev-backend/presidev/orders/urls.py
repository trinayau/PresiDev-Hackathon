from django.urls import include, path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('user', views.UserViewSet)
router.register('order', views.OrderViewSet)
router.register('item', views.ItemViewSet)


urlpatterns = [
    path('', include(router.urls)),
]