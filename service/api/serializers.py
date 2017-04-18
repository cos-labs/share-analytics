from rest_framework_json_api.serializers import ModelSerializer
from rest_framework_json_api.relations import ResourceRelatedField
from rest_framework.serializers import CharField, JSONField

from api.models import Widget, WidgetConfig, Dashboard
from django.contrib.auth.models import User


class WidgetSerializer(ModelSerializer):

    name = CharField(required=False)
    display_name = CharField(required=False)

    class Meta:
        model = Widget
        fields = (
            'id',
            'display_name',
            'name',
            'owner',
            'widget_type',
            'facet_dash',
            'facet_dash_parameter',
            'width',
            'context',
        )

    class JSONAPIMeta:
        resource_name = 'widgets'


class DashboardSerializer(ModelSerializer):

    widgets = ResourceRelatedField(
        many=True,
        read_only=True,
        related_link_url_kwarg='widget_pk'
    )

    settings = JSONField(required=False)

    class Meta:
        model = Dashboard
        fields = (
            'id',
            'name',
            'owner',
            'widgets',
            'settings'
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
