from django import template

register = template.Library()

@register.filter()
def has_functions(plan, function):
    if function in plan.functionalities.all():
        return 1
    elif function in plan.functionalities_extras.all():
        return 2    
    return 3