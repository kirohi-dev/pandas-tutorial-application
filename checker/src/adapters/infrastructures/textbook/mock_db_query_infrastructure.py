from typing import List

from ....usecases.textbook.dtos.textbook_dto import TextbookDTO
from ....usecases.textbook.textbook_query_repository import \
    TextbookQueryRepository


class MockDbQueryInfrastructure(TextbookQueryRepository):
    def read(self, problem_id: str) -> TextbookDTO:
        mock_problem_db_responses: List[TextbookDTO] = [
            {
                "body": '''https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html
https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.merge.html
https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.head.html''',
                "problem_id": '1'
            },
            {
                "body": '''https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html
https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.merge.html
https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.head.html''',
                "problem_id": '2'
            },
            {
                "body": '''https://pandas.pydata.org/docs/user_guide/basics.html#accelerated-operations
https://pandas.pydata.org/docs/user_guide/10min.html#categoricals''',
                "problem_id": '3'
            },
            {
                "body": '''https://pandas.pydata.org/docs/reference/api/pandas.to_datetime.html
https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior''',
                "problem_id": '4'
            },
            {
                "body": '''https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.sum.html''',
                "problem_id": '5'
            },
            {
                "body": '''https://pandas.pydata.org/docs/reference/api/pandas.Series.str.upper.html
https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.replace.html''',
                "problem_id": '6'
            }
        ]
        problem_db_response = next(
            (response for response in mock_problem_db_responses
                if response['problem_id'] == problem_id),
            None
        )
        if problem_db_response is None:
            raise Exception
        return problem_db_response
