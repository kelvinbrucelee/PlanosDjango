from django.shortcuts import render
from .models import Plan, Functionality
from django.views import generic


def home(request):
    plans = Plan.objects.all()
    functionalities = Functionality.objects.all()
    context = {
        'plans': plans,
        'functionalities': functionalities,
        }
    return render(request, 'home.html', context) 

class PlanDetail(generic.DetailView):
    model = Plan
    template_name = "plan.html"
