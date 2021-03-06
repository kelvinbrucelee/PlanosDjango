# Generated by Django 4.0.1 on 2022-01-31 02:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Functionality',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price_student', models.DecimalField(decimal_places=2, max_digits=8)),
                ('price_fixed', models.DecimalField(decimal_places=2, max_digits=8)),
                ('name', models.CharField(max_length=100, verbose_name='Nome')),
            ],
            options={
                'verbose_name_plural': 'Funcionalidades',
                'ordering': ('id',),
            },
        ),
        migrations.CreateModel(
            name='Plan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price_student', models.DecimalField(decimal_places=2, max_digits=8)),
                ('price_fixed', models.DecimalField(decimal_places=2, max_digits=8)),
                ('name', models.CharField(max_length=100, verbose_name='Nome')),
                ('highlight', models.BooleanField(default=False, verbose_name='Destaca?')),
                ('slug', models.SlugField(blank=True, editable=False, max_length=100, verbose_name='Slug')),
                ('functionalities', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plans.functionality')),
                ('functionalities_extras', models.ManyToManyField(blank=True, related_name='functionalities_extras', to='plans.Functionality')),
            ],
            options={
                'verbose_name_plural': 'Planos',
                'ordering': ('id',),
            },
        ),
    ]
