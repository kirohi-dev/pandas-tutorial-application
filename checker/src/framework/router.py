from fastapi import APIRouter

from ..adapters.controllers.answer import CodeExcuteBody, ConfirmCorrectBody
from .di import (code_excute_controller, confirm_correct_controller,
                 get_hint_controller, get_problem_controller,
                 get_textbook_controller)

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


@router.get("/textbooks/{problem_id}")
def get_textbook(problem_id: str):
    return get_textbook_controller.invoke(problem_id)


@router.get("/problems/{problem_id}")
def get_problem(problem_id: str):
    return get_problem_controller.invoke(problem_id)


@router.get("/hints/{problem_id}")
def get_hint(problem_id: str):
    return get_hint_controller.invoke(problem_id)
