from django.shortcuts import render
from .models import Flag

# Create your views here.
def flag_list(request):
    return render(request, 'flag/flag_list.html')
