from typing import List, Optional

from ....usecases.hint.dtos.hint_dto import HintDTO
from ....usecases.hint.hint_query_repository import HintQueryRepository


class MockDbQueryInfrastructure(HintQueryRepository):
    def read(self, problem_id: str) -> HintDTO:
        mock_problem_db_responses: List[HintDTO] = [
            {
                "body": '''../csvs/detail.csvと../csvs/transaction.csvを使います。
2つのファイルで共通のカラムがあるので、探してみてください。''',
                "problem_id": '1'
            },
            {
                "body": '''結合は共通のカラムがあればいくつでも可能です''',
                "problem_id": '2'
            },
            {
                "body": '''DataFrame同士で四則演算などのオペレーションが可能です。''',
                "problem_id": '3'
            },
            {
                "body": '''日付データはdatetimeに変換したほうが使いやすいので変換します。''',
                "problem_id": '4'
            },
            {
                "body": '',
                "problem_id": '5'
            },
            {
                "body": '''表記ゆれの修正はデータの前処理でよく使います。
データを見てどのように表記揺れしているか確認しましょう''',
                "problem_id": '6'
            }
        ]
        problem_db_response: Optional[HintDTO] = next(
            (response for response in mock_problem_db_responses
                if response['problem_id'] == problem_id),
            None
        )
        if problem_db_response is None:
            raise Exception
        return problem_db_response
