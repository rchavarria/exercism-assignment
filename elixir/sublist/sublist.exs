defmodule Sublist do

  def compare([], []), do: :equal
  def compare([], _), do: :sublist
  def compare(_, []), do: :superlist
  def compare(a, b), do: compare_lists(a, b, :equal)

  defp compare_lists(a, b, comparison_result) when length(a) == length(b) do
    compare_same_length_lists(a, b, comparison_result)
  end
  defp compare_lists(a, b, :equal) when length(a) < length(b) do
    compare_different_length_lists(a, b, :sublist)
  end
  defp compare_lists(a, b, comparison_result) when length(a) < length(b) do
    compare_different_length_lists(a, b, comparison_result)
  end
  defp compare_lists(a, b, :equal) when length(a) > length(b) do
    compare_different_length_lists(b, a, :superlist)
  end
  defp compare_lists(a, b, comparison_result) when length(a) > length(b) do
    compare_different_length_lists(b, a, comparison_result)
  end

  defp compare_different_length_lists(a, b, comparison_result) do
    [ _ | tail ] = b
    smaller_list = Enum.take(b, length(a))
    case compare_same_length_lists(a, smaller_list, comparison_result) do
      :unequal -> compare_lists(a, tail, comparison_result)
      _ -> comparison_result
    end
  end

  defp compare_same_length_lists([], [], comparison_result), do: comparison_result
  defp compare_same_length_lists([head | a], [head | b], comparison_result) do
    compare_same_length_lists(a, b, comparison_result)
  end
  defp compare_same_length_lists(_, _, _), do: :unequal

end
