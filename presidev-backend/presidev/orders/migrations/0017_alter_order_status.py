# Generated by Django 4.1 on 2023-01-16 08:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("orders", "0016_alter_item_url"),
    ]

    operations = [
        migrations.AlterField(
            model_name="order",
            name="status",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                to="orders.status",
            ),
        ),
    ]
