from typing import TypedDict


class AnswerDbResponse(TypedDict):
    answer_id: str
    body: str
    problem_id: str
