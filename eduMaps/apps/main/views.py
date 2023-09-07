from django.shortcuts import render
from django.http import HttpResponse
from .models import Education
from django.core import serializers
from django.db.models import Q, CharField
from django.db.models.functions import Lower


# Create your views here.
def index(request):
    region_param = request.GET.get("region")

    if region_param:
        educations = Education.objects.filter(region=region_param)

        response = serializers.serialize("json", educations)
        return HttpResponse(response, content_type='application/json')
    else:
        return render(request, 'main/index.html', {
            'title': 'Образовательные учреждения Чечни'
        })


def search(request):
    search_param = request.GET.get("search")
    # CharField.register_lookup(Lower, "lower")
    educations = []
    if len(search_param) > 4:
        # search_param = search_param.lower()
        educations = Education.objects.filter(title__icontains=search_param)
    response = serializers.serialize("json", educations)

    return HttpResponse(response, content_type='application/json')
