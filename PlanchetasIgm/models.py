from django.contrib.gis.db import models

class IGM_Mpoly(models.Model):
    name = models.CharField(max_length=254, null=True)
    shape_area = models.FloatField(null=True)
    geom = models.MultiPolygonField(srid=4326, null=True)
    directory = models.CharField(max_length=254, null=True)
    bought = models.BooleanField(default=False)
    owner = models.CharField(max_length=254, null=True)
    area = models.CharField(max_length=254, null=True)


    def __str__(self):
        return self.name


    class Meta:
        verbose_name = "Planchetas IGM"
        verbose_name_plural = "Planchetas IGM"
        ordering = ['bought', 'name']



