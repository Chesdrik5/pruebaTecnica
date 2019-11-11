from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PropiedadSerializer
from .serializers import PropietarioSerializer
from .models import Propiedad
from .models import Propietario

"""
Implementation fro CRUD operations by default, 
in the same time this model use a serializers class
"""

class PropiedadView(viewsets.ModelViewSet):
    serializer_class = PropiedadSerializer
    queryset = Propiedad.objects.all()

class PropietarioView(viewsets.ModelViewSet):
    serializer_class = PropietarioSerializer
    queryset = Propietario.objects.all()
# Create your views here.
