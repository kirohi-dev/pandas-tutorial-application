from ....adapters import controllers
from ..usecases import checker_usecase, code_excute_usecase

confirm_correct_controller = controllers.answer.ConfirmCorrectController(
    useCase=checker_usecase)

code_excute_controller = controllers.answer.CodeExcuteController(
    useCase=code_excute_usecase)
