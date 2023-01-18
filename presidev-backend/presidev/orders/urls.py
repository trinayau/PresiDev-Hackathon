from django.urls import include, path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('user', views.UserViewSet)
router.register('order', views.OrderViewSet)
router.register('item', views.ItemViewSet)
router.register('category', views.CategoryViewSet)
router.register('singlecategory', views.SingleCategoryViewSet)
router.register('itemcategory', views.ItemCategoryViewSet)
router.register('favitem', views.FavItemViewSet)
router.register('oldorders', views.UserOrderItemsViewSet)
router.register('status', views.StatusViewSet)
router.register('orderitems', views.OrderItemViewset)

urlpatterns = [
    path('', include(router.urls)),
    # path('twilioreply/', views.TwilioReply, name='twilioreply'),
]
