from rest_framework_json_api.serializers import ModelSerializer
from rest_framework_json_api.relations import ResourceRelatedField
from widget.models import Widget
from dashboard.models import Dashboard
from django.contrib.auth.models import User, Group


class WidgetSerializer(ModelSerializer):

    # author = ResourceRelatedField(
    #     queryset=User.objects,
    #     related_link_url_kwarg='user_pk'
    # )

    class Meta:
        model = Widget
        fields = (
            'id',
            'name',
            'author',
            'width',
            'height',
            'query',
            'settings',
        )

    class JSONAPIMeta:
        resource_name = 'widgets'


class DashboardSerializer(ModelSerializer):

    widgets = ResourceRelatedField(
        many=True,
        queryset=Widget.objects,
        related_link_url_kwarg='widget_pk'
    )

    class Meta:
        model = Dashboard
        fields = (
            'id',
            'name',
            'owner',
            'widgets'
        )

    class JSONAPIMeta:
        resource_name = 'dashboards'


class UserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = (
            'id',
            'username',
        )

    class JSONAPIMeta:
        resource_name = 'users'
