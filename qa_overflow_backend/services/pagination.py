from rest_framework import pagination, status
from rest_framework.response import Response

class CustomPagination(pagination.PageNumberPagination):
    """
    self.page.paginator.count: gives total size of data items
    Logic behind:
        page_num = int(self.request.query_params.get('page_num'))
        possible_num_of_pages = math.ceil(size_of_data/self.page_size)
        has_more = False if page_num == possible_num_of_pages else True
    """
    page_size = 1
    max_page_size = 50
    page_size_query_param = "page_size"
    page_query_param = "page_num"

    def get_paginated_response(self, data):
        # print('get_paginated_response', len(data))
        total_size = self.page.paginator.count
        result = {
            "count": total_size,
            "next": self.get_next_link(),
            "previous": self.get_previous_link(),
            "items": data
        }
        return Response(result, status=status.HTTP_200_OK)