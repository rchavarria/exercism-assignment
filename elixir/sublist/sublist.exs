defmodule Sublist do

  def compare([], []), do: :equal
  def compare([], _), do: :sublist
  def compare(_, []), do: :superlist
  def compare(a, a), do: :equal
  def compare(a, b) when length(a) == length(b), do: :unequal
  def compare(a, b) do
    is_first_list_longer?(a, b)
    |> which_list_is_contained(a, b)
    |> extract_result
  end

  defp is_first_list_longer?(a, b), do: length(a) < length(b)

  defp which_list_is_contained(true, a, b) do
    { is_sublist?(a, b), :sublist } 
  end
  defp which_list_is_contained(false, a, b) do
    { is_sublist?(b, a), :superlist} 
  end
  
  defp is_sublist?(a, b) do
    Stream.chunk(b, length(a), 1)
    |> Enum.any?(&(&1 === a))
  end

  defp extract_result({ true, comparison_result }), do: comparison_result
  defp extract_result(_), do: :unequal

end
