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
    @operations
    |> decode(code, [])
    |> remove_empty()
    |> reverse(code)
  end

  defp decode([], _code, decoded_operations), do: decoded_operations
  defp decode([ {mask, operation} | rest_operations ], code, decoded_operations) do
    [
      apply_mask(code &&& mask, operation)
      | decode(rest_operations, code, decoded_operations)
    ]
  end

  defp apply_mask(0, _), do: ""
  defp apply_mask(_, operation), do: operation

  defp remove_empty(operations) do
    operations |> Enum.filter(&(&1 != ""))
  end

  defp reverse(operations, code) do
    operations |> might_reverse(code &&& @reverse_operation_code)
  end

  defp might_reverse(operations, 0), do: operations
  defp might_reverse(operations, _do_reverse), do: operations |> Enum.reverse()

end

