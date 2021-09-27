from typing import List, Optional

from ....usecases.problem.dtos.problem_dto import ProblemDTO
from ....usecases.problem.problem_query_repository import \
    PloblemQueryRepository
from .db_responses.problem_db_response import ProblemDbResponse


class MockDbQueryInfrastructure(PloblemQueryRepository):
    def read(self, problem_id: str) -> ProblemDTO:
        mock_problem_db_responses: List[ProblemDbResponse] = [
            {
                "body": '''import pandas as pd
detail = pd.read_csv('../csvs/detail.csv')
tran = pd.read_csv('../csvs/transaction.csv')
join_data = pd.merge(detail, transaction, on='transaction_id', how='left')
print(join_data.head())''',
                "problem_id": '1'
            },
            {
                "body": '''import pandas as pd
detail = pd.read_csv('../csvs/detail.csv')
transaction = pd.read_csv('../csvs/transaction.csv')
cust = pd.read_csv('../csvs/customer_master.csv')
item = pd.read_csv('../csvs/item_master.csv')
join_data = pd.merge(detail, transaction, on='transaction_id', how='left')
join_data = pd.merge(join_data, cust, on='customer_id', how='left')
join_data = pd.merge(join_data, item, on='item_id', how='left')
print(join_data.head())''',
                "problem_id": '2'
            },
            {
                "body": '''import pandas as pd
detail = pd.read_csv('../csvs/detail.csv')
transaction = pd.read_csv('../csvs/transaction.csv')
cust = pd.read_csv('../csvs/customer_master.csv')
item = pd.read_csv('../csvs/item_master.csv')
join_data = pd.merge(detail, transaction, on='transaction_id', how='left')
join_data = pd.merge(join_data, cust, on='customer_id', how='left')
join_data = pd.merge(join_data, item, on='item_id', how='left')
print(join_data.head())''',
                "problem_id": '3'
            },
            {
                "body": '''import pandas as pd

detail = pd.read_csv('../csvs/detail.csv')
transaction = pd.read_csv('../csvs/transaction.csv')
cust = pd.read_csv('../csvs/customer_master.csv')
item = pd.read_csv('../csvs/item_master.csv')

join_data = pd.merge(detail, transaction, on='transaction_id', how='left')
join_data = pd.merge(join_data, cust, on='customer_id', how='left')
join_data = pd.merge(join_data, item, on='item_id', how='left')

join_data['price'] = join_data['quantity'] * join_data['item_price']

print(join_data[['quantity', 'item_price', 'price']].head())''',
                "problem_id": '4'
            },
            {
                "body": '''import pandas as pd

detail = pd.read_csv('../csvs/detail.csv')
transaction = pd.read_csv('../csvs/transaction.csv')
cust = pd.read_csv('../csvs/customer_master.csv')
item = pd.read_csv('../csvs/item_master.csv')

join_data = pd.merge(detail, transaction, on='transaction_id', how='left')
join_data = pd.merge(join_data, cust, on='customer_id', how='left')
join_data = pd.merge(join_data, item, on='item_id', how='left')

join_data['price'] = join_data['quantity'] * join_data['item_price']

join_data['payment_date'] = pd.to_datetime(join_data['payment_date'])
join_data['payment_month'] = join_data['payment_date'].dt.strftime("%Y%m")

print(join_data[['payment_date', 'payment_month']].head())''',
                "problem_id": '5'
            },
            {
                "body": '''import pandas as pd

detail = pd.read_csv('../csvs/detail.csv')
transaction = pd.read_csv('../csvs/transaction.csv')
cust = pd.read_csv('../csvs/customer_master.csv')
item = pd.read_csv('../csvs/item_master.csv')

join_data = pd.merge(detail, transaction, on='transaction_id', how='left')
join_data = pd.merge(join_data, cust, on='customer_id', how='left')
join_data = pd.merge(join_data, item, on='item_id', how='left')

join_data['price'] = join_data['quantity'] * join_data['item_price']

join_data['payment_date'] = pd.to_datetime(join_data['payment_date'])
join_data['payment_month'] = join_data['payment_date'].dt.strftime("%Y%m")

print(join_data.groupby('payment_month').sum()[['price']])''',
                "problem_id": '6'
            },
            {
                "body": '''import pandas as pd

detail = pd.read_csv('../csvs/detail.csv')
transaction = pd.read_csv('../csvs/transaction.csv')
cust = pd.read_csv('../csvs/customer_master.csv')
item = pd.read_csv('../csvs/item_master.csv')

join_data = pd.merge(detail, transaction, on='transaction_id', how='left')

join_data = pd.merge(join_data, cust, on='customer_id', how='left')



join_data = pd.merge(join_data, item, on='item_id', how='left')



join_data['price'] = join_data['quantity'] * join_data['item_price']

join_data['payment_date'] = pd.to_datetime(join_data['payment_date'])
join_data['payment_month'] = join_data['payment_date'].dt.strftime("%Y%m")

print(join_data.groupby(['payment_month','item_name']).sum()[['price', 'quantity']].head())''',
                "problem_id": '7'
            },
            {
                "body": '''import pandas as pb


uriage = pb.read_csv('../csvs/uriage.csv')

a = uriage['item_name']
a = uriage[['item_name']]

uriage['item_name'] = uriage['item_name'].str.upper()
uriage['item_name']  = uriage['item_name'].str.replace('　', '')
uriage['item_name']  = uriage['item_name'].str.replace(' ', '')
print(len(pb.unique(uriage.item_name)))''',
                "problem_id": '8'
            }
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
