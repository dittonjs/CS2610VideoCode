from django.db import models

# Create your models here.
class User(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.TextField()
    email = models.TextField()


class Profile(models.Model):
    id = models.BigAutoField(primary_key=True)
    notifications_enabled = models.BooleanField(default=True)
    user = models.OneToOneField("User", on_delete=models.CASCADE)


class Course(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.TextField()
    users = models.ManyToManyField("User")


class Assignment(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.TextField()
    description = models.TextField()
    due_date = models.TimeField()
    course = models.ForeignKey("Course", on_delete=models.CASCADE, related_name="assignments")

