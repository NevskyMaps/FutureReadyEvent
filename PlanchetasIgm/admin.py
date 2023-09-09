from django.contrib.gis import admin
from .models import IGM_Mpoly


class IGM_MpolyAdmin(admin.GISModelAdmin):
    fieldsets = [
        (None, {"fields": ["name"]}),
        ("Información", {"fields": ["shape_area",
                                    "bought",
                                    "owner",
                                    "area",
                                    "directory"]}),
        ("Visualización", {"fields": ["geom"]})
        ]

    list_display = ['name', 'bought', 'directory']

admin.site.register(IGM_Mpoly, IGM_MpolyAdmin)
