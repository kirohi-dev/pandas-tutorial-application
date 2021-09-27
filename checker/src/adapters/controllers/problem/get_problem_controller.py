from ....usecases.problem.dtos.problem_dto import ProblemDTO
from ....usecases.problem.get_problem_usecase import GetProblemUseCase


class GetProblemController:
    def __init__(self, useCase: GetProblemUseCase) -> None:
        self.useCase = useCase

    def invoke(self, problem_id: str) -> ProblemDTO:
        return self.useCase.get_problem(problem_id=problem_id)
