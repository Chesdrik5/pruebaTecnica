from django.db import models

"""
Models Propiedad and Propietario
Relatioships : one to many
"""

class Propietario(models.Model):
    nombre = models.CharField(max_length=50)
    apPat = models.CharField(max_length=50)
    apMat = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

class Propiedad(models.Model):
    propietario = models.ForeignKey(Propietario, on_delete=models.CASCADE)
    direccion = models.CharField(max_length=150)
    costo = models.CharField(max_length=50)

    def __str__(self):
        return self.direccion
# Create your models here.
