# Generated by Django 4.0.1 on 2022-01-31 03:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plans', '0008_alter_functionality_price_fixed_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plan',
            name='functionalities_extras',
            field=models.ManyToManyField(blank=True, related_name='functionalities_extras', to='plans.Functionality', verbose_name='Funcionalidades Extras'),
        ),
    ]
