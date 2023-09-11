from django.urls import path
from .views import test_event, homepage

urlpatterns = [
    path("eventtest/", test_event, name='IndexTest'),
    path("", homepage, name='Homepage'),
]

