from typing import List, Optional

from ....domains.answer.answer import Answer
from ....domains.answer.answer_repository import AnswerRepository
from .db_responses.answer_db_response import AnswerDbResponse


class MockDbCommandInfrastructure(AnswerRepository):
    def read(self, answer_id: str) -> Answer:
        mock_answer_db_responses: List[AnswerDbResponse] = [
            {
                "answer_id": 'a',
                "body": 'a',
                "problem_id": 'a'
            }
        ]
        answer_db_response: Optional[AnswerDbResponse] = next(
            (response for response in mock_answer_db_responses
                if response['answer_id'] == answer_id),
            None
        )
        if answer_db_response is None:
            raise Exception
        return Answer(
            answer_db_response['answer_id'],
            answer_db_response['body'],
            answer_db_response['problem_id']
        )
