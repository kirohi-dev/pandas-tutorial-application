from fastapi import FastAPI

from ..adapters.controllers.answer import CodeExcuteBody, ConfirmCorrectBody
from .di import code_excute_controller, confirm_correct_controller

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/checker")
def confirm_correct_answer(body: ConfirmCorrectBody):
    return confirm_correct_controller.invoke(body)


@app.post("/exec")
def code_execute(body: CodeExcuteBody):
    return code_excute_controller.invoke(body)
