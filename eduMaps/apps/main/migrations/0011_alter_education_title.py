# Generated by Django 4.2.4 on 2023-08-30 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_alter_education_address_alter_education_contacts_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='education',
            name='title',
            field=models.TextField(db_index=True, unique=True, verbose_name='Название учебного заведения'),
        ),
    ]
