from django.db import models

class Dashboard(models.Model):
    owner = models.ForeignKey(
        'user',
        on_delete=models.CASCADE
    )
    config = models.
