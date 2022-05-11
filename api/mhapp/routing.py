from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import chat.routing

# Websocket request get handles where with routing
application = ProtocolTypeRouter({
    # Django wrapper for authentication
    'websocket': AuthMiddlewareStack(
        # url routing
        URLRouter(
            chat.routing.websocket_urlpatterns
        )
    ),
})