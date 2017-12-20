from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.flag_list, name='flag_list'),
]
