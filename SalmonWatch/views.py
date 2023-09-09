from django.shortcuts import render, HttpResponse


def salmonwatch_index(request):
    return render(request, 'SalmonWatch/index.html')
# Create your views here.
