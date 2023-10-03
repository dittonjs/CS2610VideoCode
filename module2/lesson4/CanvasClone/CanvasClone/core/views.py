from django.shortcuts import render
from .models import User, Profile, Course, Assignment

# Create your views here.
def index(request):
    profile = Profile.objects.get(id=1)
    profile.user
    assignment = Assignment.objects.get(id=1)
    assignment.course

