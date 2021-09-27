from ....usecases.textbook.get_textbook_usecase import GetTextbookUseCase
from ....usecases.textbook.dtos.textbook_dto import TextbookDTO


class GetTextbookController:
    def __init__(self, useCase: GetTextbookUseCase) -> None:
        self.useCase = useCase

    def invoke(self, problem_id: str) -> TextbookDTO:
        return self.useCase.get_textbook(problem_id=problem_id)
