import json
from channels.generic.websocket import AsyncWebsocketConsumer

class ChatRoomConsumer(AsyncWebsocketConsumer):
    # Establishing a connection with the websocket.
    async def connect(self):
        # Grabbing the name of the chat room from the url (with room_name).
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        # Defining the room group name for users to join (by the room name)
        self.room_group_name = 'chat_%s' % self.room_name
       
        # Constructing a group to broadcast messages for users in the group (can utilise channels pacakge in await) 
        await self.channel_layer.group_add(
            self.room_group_name,
            # Points to a channel name that reaches the user
            self.channel_name 
        )

        # accepts or reject the connection
        await self.accept()

    # Removing the group and channel name   
    async def disconnect(self, close_code):
            await self.channel_layer.group_discard(
                self.room_group_name,
                self.channel_name
            )

    # Sending the message to a specific group name
    # Getting the received message data from the User
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        username = text_data_json['username']


        # Sending the message to the group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chatroom_message',
                'message': message,
                'username': username,
            }
        )

    # Receive message from the group and send by websocket. function correlates with type
    # Message will be sent by the websocket (Matching the type (from receive function) with the new function)
    async def chatroom_message(self, event):
        message = event['message']
        username = event['username']

        # message will send to the chatroom group
        await self.send(text_data=json.dumps({
            'message': message,
            'username': username,
        }))

    pass