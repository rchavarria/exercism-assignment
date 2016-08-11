defmodule DNA do
  @nucleotides [?A, ?C, ?G, ?T]

  @spec count([char], char) :: non_neg_integer
  def count(strand, nucleotide) do
    validate_nucleotide(nucleotide)
    |> validate_strand(strand)
    |> validated_count(strand, nucleotide)
  end

  defp validate_nucleotide(n) do
    Enum.any?(@nucleotides, &(&1 == n))
  end

  defp validate_strand(false, _), do: raise ArgumentError, message: "Wrong nucleotide"
  defp validate_strand(true, strand) do
    Enum.all?(strand, &(validate_nucleotide(&1)))
  end

  defp validated_count(false, _, _), do: raise ArgumentError, message: "Wrong strand"
  defp validated_count(true, strand, n) do
    Enum.count(strand, &(&1 == n))
  end

  @spec histogram([char]) :: map
  def histogram(strand) do
    Enum.reduce(@nucleotides, %{}, fn(elem, hist) ->
      Map.put_new(hist, elem, count(strand, elem))
    end)
  end
end
