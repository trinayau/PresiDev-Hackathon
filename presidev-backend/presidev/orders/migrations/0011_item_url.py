# Generated by Django 4.1 on 2023-01-15 11:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("orders", "0010_category_description_category_img_url_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="item",
            name="url",
            field=models.CharField(max_length=256, null=True),
        ),
    ]
