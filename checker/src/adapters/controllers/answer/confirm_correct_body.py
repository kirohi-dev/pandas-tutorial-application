from pydantic import BaseModel


class ConfirmCorrectBody(BaseModel):
    answer_id: str
    answer: str
