from .textbook_query_repository import TextbookQueryRepository
from .dtos.textbook_dto import TextbookDTO

class GetTextbookUseCase:
    def __init__(self, repository: TextbookQueryRepository) -> None:
        self.repository = repository


    def get_textbook(self, problem_id: str) -> TextbookDTO:
        return self.repository.read(problem_id=problem_id)
