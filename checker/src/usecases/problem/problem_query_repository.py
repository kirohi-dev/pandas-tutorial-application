from abc import ABC, abstractmethod
from .dtos.problem_dto import ProblemDTO


class PloblemQueryRepository(ABC):

  @abstractmethod
  def read(self, problem_id: str) -> ProblemDTO:
    pass
