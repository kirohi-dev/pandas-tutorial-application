from abc import ABC, abstractmethod
from .dtos.textbook_dto import TextbookDTO


class TextbookQueryRepository(ABC):

  @abstractmethod
  def read(self, problem_id: str) -> TextbookDTO:
    pass
