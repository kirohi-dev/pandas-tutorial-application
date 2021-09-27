from ...usecases import answer, hint, problem, textbook
from .adapters.infrastructures import (mock_db_command_infrastructure,
                                       mock_hint_db_query_infrastructure,
                                       mock_problem_db_query_infrastructure,
                                       mock_textbook_db_query_infrastructure)
from .adapters.presenters import checker_presenter, code_excute_presenter
from .domains import answer_service

checker_usecase = answer.CheckerUseCase(
    domain_service=answer_service,
    repository=mock_db_command_infrastructure,
    presenter=checker_presenter
)

code_excute_usecase = answer.CodeExcuteUseCase(
    domain_service=answer_service, presenter=code_excute_presenter)


get_problem_usecase = problem.GetProblemUseCase(
    repository=mock_problem_db_query_infrastructure)

get_textbook_usecase = textbook.GetTextbookUseCase(
    repository=mock_textbook_db_query_infrastructure)
get_hint_usecase = hint.GetHintUseCase(
    repository=mock_hint_db_query_infrastructure)
