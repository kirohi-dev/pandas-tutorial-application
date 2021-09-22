import sys

from ...adapters.presenters.answer.checker_presenter import CheckerPresenter
from ...domains.answer.answer_repository import AnswerRepository
from ...domains.answer.answer_service import AnswerService
from .dtos.checker_dto import CheckerDTO


class CheckerUseCase:
    def __init__(self,
                 domain_service: AnswerService,
                 repository: AnswerRepository,
                 presenter: CheckerPresenter
                 ) -> None:
        self.domain_service = domain_service
        self.repository = repository
        self.presenter = presenter

    def confirm_correct_answer(
        self,
        answer_id: str,
        answer: str
    ) -> CheckerDTO:
        # answerの取得
        try:
            entity = self.repository.read(answer_id=answer_id)
        except Exception:
            raise self.presenter.read_exception()
        else:
            try:
                # コード実行
                answer_result = self.domain_service.excute_answer(
                    answer=answer)
                # 答えを確認
                correct = self.domain_service.excute_answer(
                    answer=entity.get_body()
                )
                result = answer_result == correct
                return self.presenter.dispatch(result=result)
            except Exception:
                _, ms, _ = sys.exc_info()
                raise self.presenter.code_exec_exception(str(ms))
