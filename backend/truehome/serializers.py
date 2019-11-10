from rest_framework import serializers
from .models import Propiedad
from .models import Propietario

class PropiedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propiedad
        fields = ('id', 'direccion', 'costo')

class PropietarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propietario
        fields = ('id', 'propiedad', 'nombre', 'apPat', 'apMat')