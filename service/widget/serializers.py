from rest_framework_json_api.serializers import ModelSerializer
from rest_framework_json_api.relations import ResourceRelatedField
from widget.models import Widget

class WidgetSerializer(ModelSerializer):

    # author = ResourceRelatedField(
    #     queryset=User.objects,
    #     related_link_url_kwarg='user_pk'
    # )
    facetDash = relations.ResourceRelatedField(
        many=True,
        queryset=models.Dashboard.objects.all()
    )

    class Meta:
        model = Widget
        fields = (
            'id',
            'name',
            'author',
            'widgetType',
            'facetDash',
            'width',
            'height',
            'query',
            'settings',
        )

    class JSONAPIMeta:
        resource_name = 'widgets'
