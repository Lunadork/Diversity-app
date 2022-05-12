from django.shortcuts import render

# index from react 
def index(request):
    return render(request , 'index.html')
