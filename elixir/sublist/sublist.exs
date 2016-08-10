defmodule Sublist do

  def compare([], []), do: :equal
  def compare([], _), do: :sublist
  def compare(_, []), do: :superlist
  def compare(a, a), do: :equal
  def compare(a, b) when length(a) == length(b), do: :unequal
  def compare(a, b) when length(a) < length(b) do
    cond do
      is_sublist?(a, b) -> :sublist
      true -> :unequal
    end
  end
  def compare(a, b) when length(a) > length(b) do
    cond do
      is_sublist?(b, a) -> :superlist
      true -> :unequal
    end
  end

  defp is_sublist?(a, b) do
    Stream.chunk(b, length(a), 1)
    |> Enum.any?(&(&1 === a))
  end

end
