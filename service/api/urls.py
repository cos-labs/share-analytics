from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_nested import routers

from api import views

router = routers.SimpleRouter()
router.register(r'widgets', views.WidgetViewSet)
router.register(r'dashboards', views.DashboardViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = format_suffix_patterns([
    url(r'^$', views.api_root),
    url(r'^', include(router.urls)),
])
