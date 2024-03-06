from django.urls import path
from .views.login import LoginView
from .views.register import RegisterView

app_name='emu-user'

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),

]