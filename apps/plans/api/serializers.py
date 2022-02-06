from rest_framework import serializers
from apps.plans import models


class PlansSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = models.Plan
        fields = ["id", "name", "price_student", "price_fixed", "highlight", "slug" ]