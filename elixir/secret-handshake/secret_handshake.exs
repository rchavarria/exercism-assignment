defmodule SecretHandshake do
  use Bitwise

  @reverse_operation_code 0b00010000
  @operations [
    { 0b0001, "wink" },
    { 0b0010, "double blink" },
    { 0b0100, "close your eyes" },
    { 0b1000, "jump" }
  ]

  def commands(code) do
    operations = @operations |> reverse_if(code |> means_it())
    for { selector, operation } <- operations,
      code |> should_be_selected_by(selector),
      do: operation
  end

  defp should_be_selected_by(code, selector), do: (code &&& selector) > 0

  defp reverse_if(operations, false), do: operations
  defp reverse_if(operations, _do_reverse), do: operations |> Enum.reverse()

  defp means_it(code), do: (code &&& @reverse_operation_code) > 0

end

