from .models import*
from django.views import generic
from django.views.generic.list import ListView
from .models import*

## -- Lista de Planos -- ##
class PlanListView(ListView):
    model = Plan
    template_name = "home.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['functionalities'] = Functionality.objects.all()
        return context

## -- Planos -- ##
class PlanDetail(generic.DetailView):
    model = Plan
    template_name = "plan.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['functionalities'] = Functionality.objects.all()
        return context



