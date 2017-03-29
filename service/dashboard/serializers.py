from rest_framework_json_api.serializers import ModelSerializer
from rest_framework_json_api.relations import ResourceRelatedField
from widget.models import Widget
from dashboard.models import Dashboard

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
