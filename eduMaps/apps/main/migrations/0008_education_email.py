# Generated by Django 4.2.4 on 2023-08-29 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_alter_education_address_alter_education_contacts_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='education',
            name='email',
            field=models.CharField(max_length=255, null=True, verbose_name='Электронная почта учебного заведения'),
        ),
    ]
