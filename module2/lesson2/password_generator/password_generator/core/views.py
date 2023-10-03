from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
import string
import random

# Create your views here.
def index(request):
    return render(request, "core/index.html")

def passwords(request: HttpRequest):
    query = request.GET

    length = int(query.get("length", 12))
    count = int(query.get("count", 1))
    passwords = []
    letters = string.ascii_letters + string.digits

    for _ in range(count):
        password = "".join(random.choice(letters) for _ in range(length))
        passwords.append(password)

    print(passwords)
    context = {
        "passwords": passwords,
        "isAdmin": True
    }
    return render(request, "core/passwords.html", context)