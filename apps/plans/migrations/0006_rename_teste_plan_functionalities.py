# Generated by Django 4.0.1 on 2022-01-31 03:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('plans', '0005_rename_functionalities_plan_teste'),
    ]

    operations = [
        migrations.RenameField(
            model_name='plan',
            old_name='teste',
            new_name='functionalities',
        ),
    ]
