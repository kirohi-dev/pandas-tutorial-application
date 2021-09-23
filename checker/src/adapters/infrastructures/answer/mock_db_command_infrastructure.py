from typing import List, Optional

from ....domains.answer.answer import Answer
from ....domains.answer.answer_repository import AnswerRepository
from .db_responses.answer_db_response import AnswerDbResponse


class MockDbCommandInfrastructure(AnswerRepository):
    def read(self, answer_id: str) -> Answer:
        mock_answer_db_responses: List[AnswerDbResponse] = [
            {
                "answer_id": '1',
                "body": '''import pandas as pd
detail = pd.read_csv('../csvs/detail.csv')
tran = pd.read_csv('../csvs/transaction.csv')
join_data = pd.merge(detail, transaction, on='transaction_id', how='left')
print(join_data.head())''',
                "problem_id": '1'
            },
            {
                "answer_id": '2',
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
                "answer_id": '3',
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
                "answer_id": '4',
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
                "answer_id": '5',
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
                "answer_id": '6',
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
                "answer_id": '7',
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
                "answer_id": '8',
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
        answer_db_response: Optional[AnswerDbResponse] = next(
            (response for response in mock_answer_db_responses
                if response['answer_id'] == answer_id),
            None
        )
        if answer_db_response is None:
            raise Exception
        return Answer(
            answer_db_response['answer_id'],
            answer_db_response['body'],
            answer_db_response['problem_id']
        )
