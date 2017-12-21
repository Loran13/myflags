from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^game/$', views.flag_list, name='flag_list'),
    url(r'^$', views.home, name='home'),
    url(r'^wild/$', views.wild, name='wild'),
    url(r'^learn/$', views.learn, name='learn'),
]
