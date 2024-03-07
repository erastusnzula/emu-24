from django.views import View
from django.shortcuts import render


class PaymentView(View):
    def get(self, request):
        return render(request, 'payment/payment.html')