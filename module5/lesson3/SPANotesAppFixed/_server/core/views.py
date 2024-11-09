from django.shortcuts import render
from django.conf  import settings
import json
import os
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.forms.models import model_to_dict
from .models import Note

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
def me(req):
    return JsonResponse({"user": model_to_dict(req.user)})


@login_required
def notes(req):
    if req.method == "POST":
        body = json.loads(req.body)
        note = Note(
            title=body["title"],
            content=body["content"],
            user=req.user
        )

        note.save()
        return JsonResponse({"note": model_to_dict(note)})

    notes = [model_to_dict(note) for note in req.user.note_set.all()]
    return JsonResponse({"notes": notes})
