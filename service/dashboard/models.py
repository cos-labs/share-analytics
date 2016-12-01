from django.db.models import Model
from django.db.models import ForeignKey
from django.db.models import ManyToManyField
from django.db.models import CharField
from django.db.models import CASCADE
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import User

class Dashboard(Model):

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
        'widget.Widget',
        related_name='containing_dashboards'
    )


