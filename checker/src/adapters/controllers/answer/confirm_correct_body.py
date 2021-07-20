from pydantic import BaseModel


class ConfirmCorrectBody(BaseModel):
    problem_id: str
    answer: str
