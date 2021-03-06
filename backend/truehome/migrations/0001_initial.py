# Generated by Django 2.2.7 on 2019-11-11 18:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Propietario',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('apPat', models.CharField(max_length=50)),
                ('apMat', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Propiedad',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('direccion', models.CharField(max_length=150)),
                ('costo', models.CharField(max_length=50)),
                ('propietario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trueHome.Propietario')),
            ],
        ),
    ]
