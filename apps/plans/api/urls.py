from django.urls import path, include
#from rest_framework import routers
from .viewsets import PlansViewSet


urlpatterns = [
    path('api/', PlansViewSet.as_view(), name="api_plans"),
    path('api/<int:id>/', PlansViewSet.as_view(), name="api_plans_id")
]
