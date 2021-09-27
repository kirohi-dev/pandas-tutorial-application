from typing import List, Optional

from ....usecases.problem.dtos.problem_dto import ProblemDTO
from ....usecases.problem.problem_query_repository import \
    PloblemQueryRepository
from .db_responses.problem_db_response import ProblemDbResponse


class MockDbQueryInfrastructure(PloblemQueryRepository):
    def read(self, problem_id: str) -> ProblemDTO:
        mock_problem_db_responses: List[ProblemDbResponse] = [
            {
                "body": '''detail.csv、transaction.csvからデータを読み込み、
transaction_idでjoinし、先頭の5行を表示してください''',
                "problem_id": '1'
            },
            {
                "body": '''detail.csv、transaction.csv、customer_master.csv、item_master.csv
からデータを読み込み、全てをjoinして一つにのデータにし、先頭の5行を表示してください''',
                "problem_id": '2'
            },
            {
                "body": '''問２で作成したデータをもとに、
各注文金額をpriceとして,quantity,item_price,priceの3列からなるデータを作成し、先頭の5行を表示してください''',
                "problem_id": '3'
            },
            {
                "body": '''問２で作成したデータをもとに、
payment_dateをdatetime型に変換し、月のみを抽出したpayment_month列を作成し、
payment_date,payment_monthの2列からなるデータを作成し、先頭の5行を表示してください''',
                "problem_id": '4'
            },
            {
                "body": '''問3,問4で作成したデータをもとに、
月毎の売り上げ額を表示してください''',
                "problem_id": '5'
            },
            {
                "body": '''uriage.csvからデータを読み込みitem_nameを大文字かつtrimし表記揺れを修正してください''',
                "problem_id": '6'
            },
        ]
        problem_db_response: Optional[ProblemDbResponse] = next(
            (response for response in mock_problem_db_responses
                if response['problem_id'] == problem_id),
            None
        )
        if problem_db_response is None:
            raise Exception

        return {
            'problem_id': problem_db_response["problem_id"],
            'body': problem_db_response["body"],
            "length": len(mock_problem_db_responses)
        }
