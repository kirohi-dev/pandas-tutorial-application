from ....usecases.hint.get_hint_usecase import GetHintUseCase
from ....usecases.hint.dtos.hint_dto import HintDTO


class GetHintController:
    def __init__(self, useCase: GetHintUseCase) -> None:
        self.useCase = useCase

    def invoke(self, problem_id: str) -> HintDTO:
        return self.useCase.get_hint(problem_id=problem_id)
