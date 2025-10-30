from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Project(models.Model):

    MEDIA_TYPE_CHOICES =[
            ('image','image'),
            ('video','video')
        ]
    PROJECT_TYPE_CHOICES =[
        ('fullstack','Fullstack'),
        ('django','Django'),
        ('react','React'),
        ('opencv','OpenCv'),
        ('ai','AI'),
        ('miniprojects','MiniProjects'),
        ('learning','Learning')
    ]
     
    name =models.CharField(max_length=200)
    description = models.TextField()
    live_link = models.URLField(blank=True,null=True)
    github_link = models.URLField(blank=True,null=True)
    tech_stack = models.CharField(max_length=300 ,help_text= 'Comma-separated technologies')
    project_type = models.CharField(max_length=20,choices=PROJECT_TYPE_CHOICES,null=True,blank=True)
    time_spent = models.CharField(max_length=100,help_text="Example: '2 weeks', '30 hours'",null=True,blank=True)
    media_type = models.CharField(max_length=10 ,choices=MEDIA_TYPE_CHOICES)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class ProjectImage(models.Model):

    project = models.ForeignKey(Project,on_delete=models.CASCADE,related_name='images')
    image = models.ImageField(upload_to='project_images/')

    def __str__(self):
        return f'image for {self.project.name}'
    


class ProjectVideo(models.Model):

    project = models.OneToOneField(Project,on_delete=models.CASCADE,related_name='video')
    video = models.FileField(upload_to='project_video/')

    def __str__(self):
        return f'video for {self.project.name}'
    

class ProjectLike(models.Model):

    project = models.ForeignKey(Project,on_delete=models.CASCADE,related_name='likes')
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    liked_at = models.DateField(auto_now_add=True)

    class Meta:
        unique_together = ('project','user')
    
    def __str__(self):
        return f' {self.user.username} liked {self.project.name}'
    

    
class ProjectComment(models.Model):

    project = models.ForeignKey(Project,on_delete=models.CASCADE,related_name='comments')
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'comment by {self.user.username} on {self.project.name}'
    
    






    