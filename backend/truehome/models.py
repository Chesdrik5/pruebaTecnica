from django.db import models

# Create your models here.
"""
Models Propiedad and Propietario
Relatioships : one to many
"""
class Propiedad(models.Model):
    direccion = models.CharField(max_length=150)
    costo = models.CharField(max_length=50)

    def __str__(self):
        return self.direccion

class Propietario(models.Model):
    propiedad = models.ForeignKey(Propiedad, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=50)
    apPat = models.CharField(max_length=50)
    apMat = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre
    