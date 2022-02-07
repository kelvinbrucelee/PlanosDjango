from django.urls import path, include
from .viewsets import PlansViewSet


urlpatterns = [
    
    path('api/', PlansViewSet.as_view(), name="api_plans"),
    path('api/<int:id>/', PlansViewSet.as_view(), name="api_plans_id")
]
