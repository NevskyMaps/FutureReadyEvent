from pathlib import Path
from django.contrib.gis.utils import LayerMapping
from .models import IGM_Mpoly



# Auto-generated `LayerMapping` dictionary for IGM_Mpoly model
igm_mpoly_mapping = {
    'name': 'Name',
    'folderpath': 'FolderPath',
    'symbolid': 'SymbolID',
    'altmode': 'AltMode',
    'base': 'Base',
    'clamped': 'Clamped',
    'extruded': 'Extruded',
    'snippet': 'Snippet',
    'popupinfo': 'PopupInfo',
    'shape_leng': 'Shape_Leng',
    'shape_area': 'Shape_Area',
    'geom': 'MULTIPOLYGON25D',
}

igm_mpoly_shp = fr'C:\Users\CLJR301261\PycharmProjects\GeoServices\BibliotecaGeoespacial\PlanchetasIgm\static\PlanchetasIgm\data\4326shp\4326IGM.shp'


def run(verbose=True):
    lm = LayerMapping(IGM_Mpoly, igm_mpoly_shp, igm_mpoly_mapping, transform=False)
    lm.save(strict=True, verbose=verbose)
