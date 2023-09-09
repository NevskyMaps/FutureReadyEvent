from django.shortcuts import render
from django.core.serializers import serialize
from django.http import FileResponse, Http404
from .models import IGM_Mpoly
import os

# Request for the Geospatial Library html
def planchetasigm_index(request):
    data = serialize('geojson', IGM_Mpoly.objects.all())
    return render(request, "PlanchetasIgm/index.html", {'data': data})


def download_file(request, file_name):
    BASE_DIR = 'C:/Planchetas'
    full_file_path = os.path.join(BASE_DIR, file_name)

    if not os.path.exists(full_file_path):
        raise Http404("File not found.")

    response = FileResponse(open(full_file_path, 'rb'))
    response['Content-Disposition'] = f'attachment; filename="{file_name}"'
    return response

