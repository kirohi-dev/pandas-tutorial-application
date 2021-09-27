from ....adapters import controllers
from ..usecases import (checker_usecase, code_excute_usecase, get_hint_usecase,
                        get_problem_usecase, get_textbook_usecase)

confirm_correct_controller = controllers.answer.ConfirmCorrectController(
    useCase=checker_usecase)

code_excute_controller = controllers.answer.CodeExcuteController(
    useCase=code_excute_usecase)

get_hint_controller = controllers.hint.GetHintController(
    useCase=get_hint_usecase)

get_textbook_controller = controllers.textbook.GetTextbookController(
    useCase=get_textbook_usecase
)

get_problem_controller = controllers.problem.GetProblemController(
    useCase=get_problem_usecase
)
