from django.db import models
from django.urls import reverse

# Create your models here.
from django.db.models import signals
from django.template.defaultfilters import slugify

## -- Base for other models -- ##
class Base(models.Model):
    price_student = models.DecimalField("Preço por Estudante",max_digits=8, decimal_places=2)
    price_fixed = models.DecimalField("Preço Fixo",max_digits=8, decimal_places=2)

    class Meta:
        abstract = True
   
## -- Functionality  ##
class Functionality(Base):
    name = models.CharField('Nome',max_length=100)

    class Meta:
        verbose_name_plural = 'Funcionalidades'
        ordering = ("id",)

    def __str__(self):
        return self.name

## -- Plan --##
class Plan(Base):
    name = models.CharField('Nome',max_length=100)
    functionalities = models.ManyToManyField(Functionality, verbose_name='Funcionalidades', related_name='functionalities')
    functionalities_extras = models.ManyToManyField(Functionality, blank=True, verbose_name='Funcionalidades Extras', related_name="functionalities_extras")
    highlight = models.BooleanField('Destaca?', default=False)
    slug = models.SlugField('Slug', max_length=100, blank=True, editable=False)
    
    class Meta:
        verbose_name_plural = 'Planos'
        ordering = ("id",)

    def __str__(self):
        return self.name
  
    ## -- Listing Features -- ##
    def functionalities_list(self):
        return " / ".join([str(functionality.name) for functionality in self.functionalities.all()])

    ## -- Listing Extra Features -- ##
    def functionalities_extras_list(self):
        return " / ".join([str(functionality_extra.name) for functionality_extra in self.functionalities_extras.all()])

def plan_pre_save(signal, instance, sender, **kwargs):
    instance.slug = slugify(instance.name)    

signals.pre_save.connect(plan_pre_save, sender=Plan)
