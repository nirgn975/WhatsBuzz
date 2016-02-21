from django.db import models


class Post(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    slug = models.SlugField(unique=True)
    post_type = models.CharField(max_length=2,
                                      choices=(
                                          ('FG', 'משחקי פייסבוק'),
                                          ('TY', 'בחן את עצמך'),
                                      ),
                                      default='FG')
    image_banner = models.ImageField(upload_to='%Y/%m/%d/', blank = True)
    buzz = models.BooleanField()