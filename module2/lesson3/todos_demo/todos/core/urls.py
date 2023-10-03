from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("todos/", views.create_todo, name="create_todo"),
    path("todos/<int:id>/", views.update_todo, name="update_todo")
]