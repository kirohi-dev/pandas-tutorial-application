from ....adapters import infrastructures

mock_db_command_infrastructure = (infrastructures
                                  .answer
                                  .MockDbCommandInfrastructure()
                                  )

mock_textbook_db_query_infrastructure = (
    infrastructures.textbook.MockDbQueryInfrastructure())
mock_hint_db_query_infrastructure = (
    infrastructures.hint.MockDbQueryInfrastructure())
mock_problem_db_query_infrastructure = (
    infrastructures.problem.MockDbQueryInfrastructure())
