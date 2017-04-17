from django.db.models import Model, ForeignKey, ManyToManyField, IntegerField, CharField, CASCADE, BooleanField, TextField
from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField, ArrayField


class Dashboard(Model):

    id = CharField(
        max_length=64,
        primary_key=True
    )
    name = CharField(
        max_length=64,
        default='Unnamed Dashboard'
    )
    owner = ForeignKey(
        User,
        on_delete=CASCADE
    )
    settings = JSONField(
        null=True,
        blank=True
    )
    widgets = ManyToManyField(
        'Widget',
        related_name='containing_dashboards',
        through='WidgetConfig'
    )

    def __str__(self):
        return self.name


class Parameter(Model):

    querystring_key = CharField(max_length=64)
    path = ArrayField(CharField(max_length=64))
    default_value = CharField(max_length=64)

    def __str__(self):
        return self.name


class WidgetConfig(Model):

    dashboard = ForeignKey("Dashboard")
    widget = ForeignKey("Widget")
    position = IntegerField()

    def __str__(self):
        return "Config for {} on {}".format(self.widget.name, self.dashboard.name)


class Widget(Model):

    title = CharField(
        max_length=32,
        blank=True,
        default=""
    )
    name = CharField(
        max_length = 32,
    )
    author = TextField(max_length=20, null=True)
    widgettype = CharField(max_length=64, null=True, blank=True)
    facetdash = ForeignKey("Dashboard", null=True, blank=True)
    parameters = ManyToManyField("Parameter")
    width = IntegerField(default=2)
    height = IntegerField(default=2)
    query = JSONField(null=True, blank=True)
    content = TextField(null=True, blank=True)
    showbutton = BooleanField(default=False)
    settings = JSONField(null=True, blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        super(Widget, self).save(*args, **kwargs)

