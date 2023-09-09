from django.urls import path
from .views import planchetasigm_index

urlpatterns = [
    path("planchetasigm/", planchetasigm_index, name='planchetasigm_index'),
    # path("planchetasigm/planchetasigm_index/", get_grid, name='planchetasigm_index'),
    # path("query-postgres/", views.query_postgres, name='query-postgres'),
    # path("<str:file_name>/", download_file, name='download-file'),
]
