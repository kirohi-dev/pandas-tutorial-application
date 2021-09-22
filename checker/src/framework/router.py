from fastapi import APIRouter

from ..adapters.controllers.answer import CodeExcuteBody, ConfirmCorrectBody
from .di import code_excute_controller, confirm_correct_controller


router = APIRouter()


@router.get("/")
def read_root():
    return {"Hello": "World"}


@router.post("/checker")
def confirm_correct_answer(body: ConfirmCorrectBody):
    return confirm_correct_controller.invoke(body)


@router.post("/exec")
def code_execute(body: CodeExcuteBody):
    return code_excute_controller.invoke(body)
