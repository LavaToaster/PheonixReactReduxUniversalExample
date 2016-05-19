defmodule Eqtv.MessagesChannel do
  use Eqtv.Web, :channel

  def join("messages:" <> message_id, _params, socket) do
    {:ok, assign(socket, :message_id, message_id) }
  end

  def handle_in("new:message", params, socket) do
    broadcast! socket, "new:message", %{
      text: params["text"]
    }

    {:reply, :ok, socket}
  end
end
