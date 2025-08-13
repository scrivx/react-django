from django.urls import path, include
from rest_framework import routers
from projects import views

router = routers.DefaultRouter()
router.register('projects', views.ProjectView)

urlpatterns = [
  path('api/v1/', include(router.urls)),
]
