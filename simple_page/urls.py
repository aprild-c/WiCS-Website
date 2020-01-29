from django.urls import path
from simple_page import views

urlpatterns = [
    path('', views.home, name='simple_page'),
    path('about/', views.about, name='simple_page'),
    path('calendar/', views.calendar, name='simple_page'),
]