from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

@login_required
def index(req):
    return HttpResponse("Hello, world! You should only see me if you are logged in!")