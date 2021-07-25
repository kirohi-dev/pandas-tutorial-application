from abc import ABC, abstractmethod

from .answer import Answer


class AnswerRepository(ABC):

    @abstractmethod
    def read(self, answer_id: str) -> Answer:
        pass
