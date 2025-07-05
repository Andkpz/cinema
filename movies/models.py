from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    genre = models.CharField(max_length=100)
    year = models.PositiveIntegerField()
    duration = models.PositiveIntegerField(help_text="Duration in minutes")
    poster = models.ImageField(upload_to='posters/')

    def __str__(self):
        return self.title