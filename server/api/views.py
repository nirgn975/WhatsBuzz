from rest_framework import viewsets
from django.contrib.auth.models import User
# from api.serializers import UserSerializer, FacebookUserSerializer

# from whatsbuzz.models import FacebookUser


# class UserViewSet(viewsets.ReadOnlyModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = User.objects.all().order_by('-date_joined')
#     serializer_class = UserSerializer
#
#
# class FacebookUserViewSet(viewsets.ReadOnlyModelViewSet):
#     """
#     API endpoint that allows Facebook users to be viewed or edited.
#     """
#     queryset = FacebookUser.objects.all()
#     serializer_class = FacebookUserSerializer
