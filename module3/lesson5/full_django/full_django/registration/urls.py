from django.urls import path, include
from . import views

urlpatterns = [
    path('sign_in/', views.sign_in),
    path('sign_up/', views.sign_up),
]