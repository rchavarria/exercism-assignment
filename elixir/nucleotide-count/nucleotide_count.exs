defmodule DNA do
  @nucleotides [ ?A, ?C, ?G, ?T ]

  @spec count([char], char) :: non_neg_integer
  def count(strand, nucleotide) when not nucleotide in @nucleotides, do: raise ArgumentError
  def count(strand, nucleotide) do
    Enum.count(strand, &(valid_nucleotide?(&1, nucleotide)))
  end

  defp valid_nucleotide?(s, _) when not s in @nucleotides, do: raise ArgumentError
  defp valid_nucleotide?(n, n), do: true
  defp valid_nucleotide?(_, _), do: false

  @spec histogram([char]) :: map
  def histogram(strand) do
    for n <- @nucleotides, into: Map.new do
      { n, count(strand, n) }
    end
  end
end
