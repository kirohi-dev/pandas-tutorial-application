from ....usecases.answer.checker_usecase import CheckerUseCase
from ....usecases.answer.dtos.checker_dto import CheckerDTO
from .confirm_correct_body import ConfirmCorrectBody


class ConfirmCorrectController:
    def __init__(self, useCase: CheckerUseCase) -> None:
        self.useCase = useCase

    def invoke(self, body: ConfirmCorrectBody) -> CheckerDTO:
        return self.useCase.confirm_correct_answer(
            answer_id=body.answer_id, answer=body.answer)
