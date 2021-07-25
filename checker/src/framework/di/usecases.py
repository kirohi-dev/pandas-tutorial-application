from ...usecases import answer
from .adapters.infrastructures import mock_db_command_infrastructure
from .adapters.presenters import checker_presenter, code_excute_presenter
from .domains import answer_service

checker_usecase = answer.CheckerUseCase(
    domain_service=answer_service,
    repository=mock_db_command_infrastructure,
    presenter=checker_presenter
)

code_excute_usecase = answer.CodeExcuteUseCase(
    domain_service=answer_service, presenter=code_excute_presenter)
