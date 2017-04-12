from django.shortcuts import render
from rest_framework import viewsets
from widget.serializers import WidgetSerializer

class Widget(viewsets.ModelViewSet):
    queryset = models.Widget.objects.all()
    serializer_class = WidgetSerializer

# Create your views here.
