from ....usecases.answer.code_excute_usecase import (CodeExcuteDTO,
                                                     CodeExcuteUseCase)
from .code_excute_body import CodeExcuteBody


class CodeExcuteController:
    def __init__(self, useCase: CodeExcuteUseCase) -> None:
        self.useCase = useCase

    def invoke(self, body: CodeExcuteBody) -> CodeExcuteDTO:
        return self.useCase.code_excute(answer=body.answer)
