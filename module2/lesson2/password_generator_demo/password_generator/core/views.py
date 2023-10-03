from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest
import string
import random
# Create your views here.
def index(request):
    return render(request, "core/index.html")

def passwords(request):
    length = int(request.GET.get("length", 12))
    count = int(request.GET.get("count", 1))
    passwords = []
    for _ in range(count):
        password = "".join(random.choice(string.ascii_letters + string.digits) for x in range(length))
        passwords.append(password)
    return render(request, "core/passwords.html", context={"passwords": passwords})
