ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Eqtv.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Eqtv.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Eqtv.Repo)

