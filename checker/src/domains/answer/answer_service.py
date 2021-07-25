import contextlib
import sys
import traceback
from io import StringIO

from ..domain_exceptions import CodeExecException


class AnswerService:
    def excute_answer(self, answer: str) -> str:
        with self.__replace_stdout_with_string_io() as string_io:
            try:
                exec(answer)
            except SyntaxError as err:
                error_class = err.__class__.__name__
                detail = err.args[0]
                line_number = err.lineno
                raise CodeExecException(self.__error_message(
                    error_class=error_class,
                    line_number=line_number,
                    detail=detail
                ))
            except Exception as err:
                error_class = err.__class__.__name__
                detail = err.args[0]
                _, _, tb = sys.exc_info()
                line_number = traceback.extract_tb(tb)[-1][1]
                raise Exception(self.__error_message(
                    error_class=error_class,
                    line_number=line_number,
                    detail=detail
                ))
            return string_io.getvalue().strip()

    @contextlib.contextmanager
    def __replace_stdout_with_string_io(self):
        string_io = StringIO()
        try:
            sys.stdout = string_io
            yield string_io
        finally:
            sys.stdout = sys.__stdout__
            string_io.close()

    def __error_message(self, error_class, line_number, detail):
        return f'{error_class} at line {line_number}: {detail}'
