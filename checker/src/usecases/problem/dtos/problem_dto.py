from typing import TypedDict


class ProblemDTO(TypedDict):
    problem_id: str
    body: str
    length: int
