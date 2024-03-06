from django.views import View
from django.shortcuts import render


class RegisterView(View):
    def get(self, request):
        return render(request, 'emu_user/register.html')
