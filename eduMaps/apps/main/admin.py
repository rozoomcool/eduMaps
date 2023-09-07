from django.contrib import admin
from .models import Education
from django.contrib.auth.models import Group

# Register your models here.

admin.site.site_header = 'ADMINISTRATION'
admin.site.site_title = 'ADMINISTRATION'

admin.site.unregister(Group)

# Register your models here.
admin.site.register(Education)
