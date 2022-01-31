from django.contrib import admin
from .models import Plan, Functionality


@admin.register(Plan)
class PlanAdmin(admin.ModelAdmin):
    list_display = ("name", "price_student", "price_fixed", "functionalities_list", "functionalities_extras_list")

@admin.register(Functionality)
class FunctionalityAdmin(admin.ModelAdmin):
    list_display = ("name","price_student", "price_fixed")

