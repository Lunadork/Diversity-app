from django.urls import re_path

from . import consumers

# 'w' handles the string thats entered inc lower/uppercase and numbers etc...
websocket_urlpatterns = [
    re_path(r'ws/chat/(?P<room_name>\w+)/$', consumers.ChatRoomConsumer.as_asgi()),
]