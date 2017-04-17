from rest_framework_json_api.serializers import ModelSerializer
from rest_framework_json_api.relations import ResourceRelatedField
from rest_framework.serializers import CharField

from api.models import Widget, WidgetConfig, Dashboard
from django.contrib.auth.models import User


class WidgetSerializer(ModelSerializer):

    # author = ResourceRelatedField(
    #     queryset=User.objects,
    #     related_link_url_kwarg='user_pk'
    # )

    name = CharField(
        required=False
    )

    settings = ResourceRelatedField(
        queryset = WidgetConfig.objects.all(),

    )

    class Meta:
        model = Widget
        fields = (
            'id',
            'title',
            'name',
            'author',
            'widgettype',
            'facetdash',
            'width',
            'height',
            'query',
            'content',
            'showbutton',
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

    def save(self):
        if not self.validated_data['name']:
            self.validated_data['name'] = self.validated_data['id']
        super().__save__()

    class Meta:
        model = Dashboard
        fields = (
            'id',
            'name',
            'owner',
            'widgets',
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
