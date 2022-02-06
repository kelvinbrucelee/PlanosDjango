from django.urls import path, include
from .views import PlanListView, PlanDetail


urlpatterns = [
    path('', include('apps.plans.api.urls')),
    path('', PlanListView.as_view()),
    path('planos', PlanListView.as_view(), name='home'),
    path('planos/<slug:slug>', PlanDetail.as_view(), name="plan_detail"), 
]
