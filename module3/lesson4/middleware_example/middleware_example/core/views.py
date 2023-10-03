from django.shortcuts import HttpResponse

# Create your views here.
def index(req):
    print(req.user)
    return HttpResponse("Hello, world!")