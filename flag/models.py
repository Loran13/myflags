from django.db import models

# Create your models here.
class Flag(models.Model):
    link = models.CharField(max_length=500)
    country = models.CharField(max_length=200)

    def publish(self):
        self.save()

    def __str__(self):
        return self.country
