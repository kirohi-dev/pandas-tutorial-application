from .dtos.hint_dto import HintDTO
from .hint_query_repository import HintQueryRepository

class GetHintUseCase:
    def __init__(self, repository: HintQueryRepository) -> None:
        self.repository = repository

    def get_hint(self, problem_id: str) -> HintDTO:
        return self.repository.read(problem_id=problem_id)
