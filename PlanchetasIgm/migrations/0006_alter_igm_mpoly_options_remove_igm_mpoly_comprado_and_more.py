# Generated by Django 4.2.3 on 2023-09-01 19:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('PlanchetasIgm', '0005_remove_igm_mpoly_base_remove_igm_mpoly_clamped_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='igm_mpoly',
            options={'verbose_name': 'Planchetas IGM', 'verbose_name_plural': 'Planchetas IGM'},
        ),
        migrations.RemoveField(
            model_name='igm_mpoly',
            name='comprado',
        ),
        migrations.RemoveField(
            model_name='igm_mpoly',
            name='folderpath',
        ),
        migrations.RemoveField(
            model_name='igm_mpoly',
            name='shape_leng',
        ),
    ]
