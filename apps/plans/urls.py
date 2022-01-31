from django.urls import path
from .views import home, PlanDetail

urlpatterns = [
    path('', home),
    path('planos', home, name='home'),
    path('planos/<slug:slug>', PlanDetail.as_view(), name="plan_detail"), 
]
