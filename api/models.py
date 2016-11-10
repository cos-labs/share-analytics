from django.db.models import Model
from django.db.models import ForeignKey
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import User

class Dashboard(Model):
    owner = ForeignKey(
        'User',
        on_delete=CASCADE
    )
    config = JSONField()


