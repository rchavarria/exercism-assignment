defmodule Sublist do
  def compare([], []), do: :equal
  def compare([], _), do: :sublist
  def compare(_, []), do: :superlist
  def compare(a, b) do
    [ head_a | tail_a ] = a
    [ head_b | tail_b ] = b
    case compare_elements(head_a, head_b) do
      true -> compare(tail_a, tail_b)
      false -> compare(tail_a, b)
    end
  end

  defp compare_elements(x, x), do: true
  defp compare_elements(x, y), do: false

end
