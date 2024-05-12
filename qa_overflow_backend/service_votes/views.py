from rest_framework import generics, status
from rest_framework.response import Response
from .models import UserVotes
from service_questions.models import Questions
from .serializers import UserVotesSerializer
from services.pagination import CustomPagination

class UserVotesAPIView(generics.ListCreateAPIView):
    queryset = UserVotes.objects.all()
    serializer_class = UserVotesSerializer
    pagination_class = CustomPagination

    def post(self, request, *args, **kwargs):
        user_id = 1
        data = request.data
        print(data)
        vote_obj = UserVotes.objects.filter(user_id=user_id, post_type=data['post_type'], post_id=data['post_id']).first()
        question = Questions.objects.filter(id=data['post_id']).first()
        print('1', question.upvotes - question.downvotes)
        if vote_obj:
            if (data['vote_type'] == 'downvote' and vote_obj.vote_type == 'downvote') or \
                (data['vote_type'] == 'upvote' and vote_obj.vote_type == 'upvote'):
                return Response('Do nothing', status = status.HTTP_204_NO_CONTENT)
            elif data['vote_type'] == 'downvote':
                question.downvotes += 1
                question.upvotes -= 1
            else:
                question.upvotes += 1
                question.downvotes -= 1
            vote_obj.vote_type = data['vote_type']
            
            question.save()
            vote_obj.save()
            print('2', vote_obj.vote_type, question.upvotes - question.downvotes)
            return Response('Vote Updated', status=status.HTTP_201_CREATED)
        if data['vote_type'] == 'upvote':
            question.upvotes += 1
        else:
            question.downvotes += 1
        question.save()
        ser = UserVotesSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        ser.save()
        print('3', ser['vote_type'])
        return Response('vote record created', status=status.HTTP_201_CREATED)