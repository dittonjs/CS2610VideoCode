from django.db import models

# Create your models here.
# TODO: create the Todo model
class Todo(models.Model):
    id = models.BigAutoField(primary_key=True)
    content = models.TextField()
    is_completed = models.BooleanField(default=False)