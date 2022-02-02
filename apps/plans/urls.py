from django.urls import path
from .views import PlanListView, PlanDetail


urlpatterns = [
    path('', PlanListView.as_view()),
    path('planos', PlanListView.as_view(), name='home'),
    path('planos/<slug:slug>', PlanDetail.as_view(), name="plan_detail"), 
]
