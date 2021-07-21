from ..domain_exceptions import ConflictException


class Answer:
    def __init__(self, answer_id: str, body: str, problem_id: str) -> None:
        self.__answer_id = answer_id
        self.__body = body
        self.__problem_id = problem_id

    def get_answer_id(self) -> str:
        return self.__answer_id

    def get_body(self) -> str:
        return self.__body

    def get_problem_id(self) -> str:
        return self.__problem_id

    def confirm_correct_answer(
        self,
        problem_id: str,
        answer_result: str
    ) -> bool:
        if (self.__problem_id != problem_id):
            raise ConflictException
        return self.__body == answer_result
