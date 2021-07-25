from ....usecases.answer.dtos.code_excute_dto import CodeExcuteDTO


class CodeExcutePresenter:

    def dispatch(self, success: bool, result: str) -> CodeExcuteDTO:
        return {
            "success": success,
            "result": result
        }
