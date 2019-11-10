from django.contrib import admin
from .models import Propiedad
from .models import Propietario

class PropiedadAmin(admin.ModelAdmin):
    list_display = ('direccion', 'costo')

admin.site.register(Propiedad, PropiedadAmin)

class PropietarioAdmin(admin.ModelAdmin):
    list_display = ('propiedad', 'nombre', 'apPat', 'apMat')

admin.site.register(Propietario, PropietarioAdmin)


# Register your models here.
