from pydantic import BaseModel


class CodeExcuteBody(BaseModel):
    answer: str
