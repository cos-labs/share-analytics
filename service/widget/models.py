from django.db.models import Model
from django.db.models import IntegerField
from django.db.models import ForeignKey
from django.db.models import CharField
from django.db.models import ManyToManyField
from django.db.models import BooleanField
from django.db.models import TextField
from django.contrib.postgres.fields import ArrayField
from django.contrib.postgres.fields import JSONField
from django.db.models import PROTECT
from django.db.models import CASCADE

from django.contrib.auth.models import User


class Parameter(Model):

    querystring_key = CharField(max_length=64)
    path = ArrayField(CharField(max_length=64))
    default_value = CharField(max_length=64)

    def __str__(self):
        return self.name

class WidgetConfig(Model):

    dashboard = ForeignKey("dashboard.Dashboard")
    widget = ForeignKey("widget.Widget")
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
    facetdash = ForeignKey("dashboard.Dashboard", null=True, blank=True)
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
