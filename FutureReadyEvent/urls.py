from django.urls import path
from .views import test_event

urlpatterns = [
    path("eventtest/", test_event, name='IndexTest'),
]

