from django.shortcuts import render
from .models import Flag

# Create your views here.


def flag_list(request):
    flags = Flag.objects.all()
    return render(request, 'flag/flag_list.html', {'flags': flags})

def home(request):
    return render(request, 'flag/index.html')

def wild(request):
    return render(request, 'flag/inTheWild.html')

def learn(request):
    return render(request, 'flag/learnAboutFlags.html')
