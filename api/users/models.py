from django.db import models

# Create your models here.
class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField("Username", max_length=100, unique=True)
    email = models.EmailField(unique=True)
    is_verified = models.BooleanField(default=True)
    mind_state = models.CharField("Status", max_length=50, blank=True)
    password = models.CharField("Password", max_length=255)
    banned = models.BooleanField(default=False)

    class Meta:
        db_table = 'User'

    def __str__(self):
        return self.username