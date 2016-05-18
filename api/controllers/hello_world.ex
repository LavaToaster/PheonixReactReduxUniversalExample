defmodule Eqtv.HelloWorld do
  use Eqtv.Web, :controller

  def index(conn, _params) do
    json conn, %{status: "I wuv you"}
  end

end
