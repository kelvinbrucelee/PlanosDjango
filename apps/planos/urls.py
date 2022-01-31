from django.urls import path
from .views import Home, PlanDetail

urlpatterns = [
    path('planos', Home.as_view(), name='home'),
    path('planos/<slug:slug>', PlanDetail.as_view(), name="plan_detail"), 
]
