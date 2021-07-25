from fastapi import HTTPException

from ....usecases.answer.dtos.checker_dto import CheckerDTO


class CheckerPresenter:
    def read_exception(self) -> HTTPException:
        return HTTPException(status_code=404, detail="答えが存在しません")

    def code_exec_exception(self, message: str) -> HTTPException:
        return HTTPException(status_code=422, detail=message)

    def dispatch(self, result: bool) -> CheckerDTO:
        if (result is False):
            return {"message": "不正解です"}
        return {"message": "正解です"}
