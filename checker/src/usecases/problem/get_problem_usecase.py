from .problem_query_repository import PloblemQueryRepository
from .dtos.problem_dto import ProblemDTO

class GetProblemUseCase:
    def __init__(self, repository: PloblemQueryRepository) -> None:
        self.repository = repository


    def get_problem(self, problem_id: str) -> ProblemDTO:
        return self.repository.read(problem_id=problem_id)
