from django.db import models

# Create your models here.
class Note(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.TextField()
    content = models.TextField()