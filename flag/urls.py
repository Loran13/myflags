from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.flag_list, name='flag_list'),
    url(r'^$', views.flag_list, name='index'),
    url(r'^$', views.flag_list, name='inTheWild'),
    url(r'^$', views.flag_list, name='learnAboutFlags'),
]
