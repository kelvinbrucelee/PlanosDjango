# Generated by Django 4.0.1 on 2022-01-31 02:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('plans', '0004_alter_functionality_table_alter_plan_table'),
    ]

    operations = [
        migrations.RenameField(
            model_name='plan',
            old_name='functionalities',
            new_name='teste',
        ),
    ]