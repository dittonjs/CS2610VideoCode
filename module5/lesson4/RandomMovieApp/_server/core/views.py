import requests
from django.shortcuts import render
from django.conf  import settings
import json
import random
import os
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

# Load manifest when server launches
MANIFEST = {}
if not settings.DEBUG:
    f = open(f"{settings.BASE_DIR}/core/static/manifest.json")
    MANIFEST = json.load(f)

# Create your views here.
@login_required
def index(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/main.ts"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/main.ts"]["css"][0]
    }
    return render(req, "core/index.html", context)



@login_required
def random_movie(req):
    api_key = os.environ.get("TMDB_API_KEY")
    url = f"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key={api_key}"
    response = requests.get(url)
    body = json.loads(response.text)
    movie = random.choice(body["results"])
    return JsonResponse({"movie": movie})

