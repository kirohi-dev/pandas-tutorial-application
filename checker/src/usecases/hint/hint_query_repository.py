from abc import ABC, abstractmethod
from .dtos.hint_dto import HintDTO


class HintQueryRepository(ABC):

    @abstractmethod
    def read(self, problem_id: str) -> HintDTO:
        pass
