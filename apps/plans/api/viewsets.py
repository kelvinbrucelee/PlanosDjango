from apps.plans.models import Plan
from .serializers import PlansSerializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class PlansViewSet(APIView):
    queryset = Plan.objects.all()
    
    def get(self, request, id=None):
        if id:
            plan = Plan.objects.get(id=id)
            amount = request.GET["quantidade"]
            price = plan.price_fixed
            student = float(amount) * float(plan.price_student)
            value = float(price) + float(student)
            return Response({"status": "success", "value": value}, status=status.HTTP_200_OK)
              
        plans = Plan.objects.all()
        serializer = PlansSerializers(plans, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
            
