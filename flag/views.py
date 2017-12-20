from django.shortcuts import render

# Create your views here.
def flag_list(request):
    return render(request, 'flag/flag_list.html')
