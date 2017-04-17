from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

from django.contrib.auth.models import User
from api.models import Dashboard, Widget
from api.serializers import DashboardSerializer, WidgetSerializer, UserSerializer


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'widgets': reverse('widget-list', request=request, format=format),
        'dashboards': reverse('dashboard-list', request=request, format=format),
        'users': reverse('user-list', request=request, format=format)
    })


class WidgetViewSet(viewsets.ModelViewSet):
    queryset = Widget.objects.all()
    serializer_class = WidgetSerializer


class DashboardViewSet(viewsets.ModelViewSet):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
