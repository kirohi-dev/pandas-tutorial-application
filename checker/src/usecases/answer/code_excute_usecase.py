import sys

from ...adapters.presenters.answer.code_excute_presenter import \
    CodeExcutePresenter
from ...domains.answer.answer_service import AnswerService
from .dtos.code_excute_dto import CodeExcuteDTO


class CodeExcuteUseCase:
    def __init__(self,
                 domain_service: AnswerService,
                 presenter: CodeExcutePresenter
                 ) -> None:
        self.domain_service = domain_service
        self.presenter = presenter

    def code_excute(
        self,
        answer: str
    ) -> CodeExcuteDTO:
        try:
            # コード実行
            answer_result = self.domain_service.excute_answer(
                answer=answer)
            return self.presenter.dispatch(success=True, result=answer_result)
        except Exception:
            _, ms, _ = sys.exc_info()
            return self.presenter.dispatch(success=False, result=str(ms))
