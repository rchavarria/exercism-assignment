defmodule SumOfMultiples do

  @doc """
  Adds up all numbers from 1 to a given end number that are multiples of the factors provided.
  """
  @spec to(non_neg_integer, [non_neg_integer]) :: non_neg_integer
  def to(limit, factors) do
    1..(limit - 1) |> find_multiples(factors)
                   |> Enum.sum
  end

  defp find_multiples(numbers, factors) do
    numbers |> Enum.filter(&(is_multiple_of_any(&1, factors)))
  end

  defp is_multiple_of_any(n, factors) do
    factors |> Enum.any?(&(is_multiple_of(n, &1)))
  end

  defp is_multiple_of(n, factor), do: rem(n, factor) == 0

end
