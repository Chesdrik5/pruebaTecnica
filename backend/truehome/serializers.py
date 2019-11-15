from rest_framework import serializers
from .models import Propiedad
from .models import Propietario

"""
Fields that we want to be converted to JSON
"""

class PropiedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propiedad
        fields = ('id','propietario', 'direccion', 'costo')

class PropietarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propietario
        fields = ('id','nombre', 'apPat', 'apMat')