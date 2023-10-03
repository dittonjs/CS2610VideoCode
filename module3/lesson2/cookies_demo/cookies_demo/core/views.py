from django.shortcuts import render
from django.http import HttpRequest, HttpResponse

# Create your views here.
def index(req: HttpRequest):
    num_visits = int(req.COOKIES.get("visits", 0))

    res = HttpResponse(f"<h1>You have visited this page {num_visits + 1} times!</h1>")
    res.set_cookie("visits", num_visits + 1)
    return res