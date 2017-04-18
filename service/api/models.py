from django.db.models import Model, ForeignKey, ManyToManyField, IntegerField, CharField, CASCADE, TextField
from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField, ArrayField


class Dashboard(Model):

    id = CharField(max_length=64, primary_key=True)
    name = CharField(max_length=64, default='Unnamed Dashboard')
    owner = ForeignKey(User, on_delete=CASCADE)
    settings = JSONField(null=True, blank=True)
    widgets = ManyToManyField(
        'Widget',
        related_name='containing_dashboards',
        through='WidgetConfig'
    )

    def __str__(self):
        return self.name


class Widget(Model):

    name = CharField(max_length=32, blank=True, null=True)
    display_name = CharField(max_length=32, blank=True, null=True)
    width = IntegerField(default=2)
    widget_type = CharField(max_length=64)
    facet_dash = ForeignKey("Dashboard", null=True, blank=True)
    facet_dash_parameter = CharField(max_length=32, null=True, blank=True)
    parameters = ManyToManyField("Parameter")
    owner = ForeignKey(User, on_delete=CASCADE)
    context = JSONField(null=True, blank=True)

    def __str__(self):
        return self.name or ''


class Parameter(Model):

    name = CharField(max_length=64)
    path = ArrayField(CharField(max_length=64))
    default_value = TextField()

    def __str__(self):
        return self.name


class WidgetConfig(Model):

    dashboard = ForeignKey("Dashboard")
    widget = ForeignKey("Widget")
    position = IntegerField()

    def __str__(self):
        return "Config for {} on {}".format(self.widget.name, self.dashboard.name)
