from django.db import models


class Education(models.Model):
    REGION = [
        ('GRZR', 'Грозненский район'),
        ('URUS', 'Урус-Мартановский район'),
        ('VEDN', 'Веденский район'),
        ('ITUM', 'Итум-Калинский район'),
        ('SHAL', 'Шалинский район'),
        ('SHAT', 'Шатойский район'),
        ('SHAR', 'Шаройский район'),
        ('KURC', 'Курчалоевский район'),
        ('SHEL', 'Шелковской район'),
        ('SERN', 'Серноводский район'),
        ('ACHM', 'Ачхой-Мартановский'),
        ('NTRK', 'Надтеречный район'),
        ('NAUR', 'Наурский район'),
        ('GUMS', 'Гудермесский район'),
        ('NOJU', 'Ножай-Юртовский район'),
        ('GROZ', 'Грозный'),
        ('ARGN', 'Аргун')
    ]

    title = models.CharField('Название учебного заведения', max_length=255, unique=True, db_index=True)
    description = models.TextField('Описание учебного заведения', null=True, blank=True)
    web_site_url = models.CharField('Адрес сайта учебного заведения', null=True, max_length=255, blank=True)
    contacts = models.CharField('Контакты учебного заведения', null=True, max_length=255, blank=True)
    email = models.CharField('Электронная почта учебного заведения', null=True, max_length=255, blank=True)
    address = models.CharField('Адрес учебного заведения', null=True, max_length=255, blank=True)
    director_name = models.CharField('Имя директора', max_length=255, null=True, blank=True)
    location = models.CharField('Координаты учебного заведения', max_length=255)
    region = models.CharField('Район учебного заведения', choices=REGION, max_length=4)

    class Meta:
        verbose_name = 'Образовательное учреждение'
        verbose_name_plural = 'Образовательные учреждения'