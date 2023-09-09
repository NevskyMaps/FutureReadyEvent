from django.urls import path
from . import views

urlpatterns = [
    path('salmonwatch/', views.salmonwatch_index, name='salmonwatch_index')
]

