# Generated by Django 4.1.5 on 2023-01-15 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0015_favitem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='url',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]
