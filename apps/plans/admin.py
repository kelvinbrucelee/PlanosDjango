from django.contrib import admin
from .models import Plan, Functionality


@admin.register(Plan)
class PlanAdmin(admin.ModelAdmin):
    list_display = ("name", "price_student", "price_fixed", "functionalities_list", "functionalities_extras_list")
    fieldsets = (
        (None, {
            'fields': ('name',)
        }),
        (None, {
            'fields': ('price_student',)
        }),
        (None, {
            'fields': ('price_fixed',)
        }),
        (None, {
            'fields': ('functionalities', 'functionalities_extras')
        }),
        (None, {
            'fields': ('highlight',)
        }),
        
    )



@admin.register(Functionality)
class FunctionalityAdmin(admin.ModelAdmin):
    list_display = ("name","price_student", "price_fixed")
    fieldsets = (
        (None, {
            'fields': ('name',)
        }),
        (None, {
            'fields': ('price_student',)
        }),
        (None, {
            'fields': ('price_fixed',)
        }),
    )

