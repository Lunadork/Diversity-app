from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from users import views
from .views import index

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

# Setup automatic URL routing
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', index),
    path('admin/', admin.site.urls),
    path('chat/', include('chat.urls')),
    path('api-root/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls',
                              namespace='rest_framework')),
]
