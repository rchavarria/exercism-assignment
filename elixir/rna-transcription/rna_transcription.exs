defmodule RNATranscription do

  @dna_to_rna %{
    ?G => ?C,
    ?C => ?G,
    ?T => ?A,
    ?A => ?U
  }

  @spec to_rna([char]) :: [char]
  def to_rna(dna) do
    dna |> Enum.map(fn nucleotide -> @dna_to_rna[nucleotide] end)
  end

end
