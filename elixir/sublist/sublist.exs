defmodule Sublist do

  def compare([], []), do: :equal
  def compare([], _), do: :sublist
  def compare(_, []), do: :superlist
  def compare(a, b), do: compare_lists(a, b, :equal)

  def compare_lists(a, b, comparison_result) when length(a) == length(b) do
    compare_same_length_lists(a, b, comparison_result)
  end
  def compare_lists(a, b, _) when length(a) < length(b) do
    [ _ | tail_b ] = b
    sublist = Enum.take(b, length(a))
    case compare_same_length_lists(a, sublist, :sublist) do
      :unequal -> compare_lists(a, tail_b, :sublist)
      :sublist -> :sublist
    end
  end
  def compare_lists(a, b, _) when length(a) > length(b) do
    [ _ | tail_a ] = a
    superlist = Enum.take(a, length(b))
    case compare_same_length_lists(superlist, b, :superlist) do
      :unequal -> compare_lists(tail_a, b, :superlist)
      :superlist -> :superlist
    end
  end

  defp compare_same_length_lists([], [], comparison_result), do: comparison_result
  defp compare_same_length_lists([head | a], [head | b], comparison_result) do
    compare_same_length_lists(a, b, comparison_result)
  end
  defp compare_same_length_lists(_, _, _) do
    :unequal
  end

end
