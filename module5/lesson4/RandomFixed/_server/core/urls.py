from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.index, name="index"),
    path('random/', view=views.random_movie, name="random movie")
]