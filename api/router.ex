defmodule Eqtv.Router do
  use Eqtv.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", Eqtv do
    pipe_through :api

    get "/", HelloWorld, :index
  end
end
