defmodule ProteinTranslation do
  @doc """
  Given an RNA string, return a list of proteins specified by codons, in order.
  """
  @spec of_rna(String.t()) :: { atom,  list(String.t()) }
  def of_rna(rna) do
    rna
    |> String.codepoints()
    |> Enum.chunk_every(3)
    |> Enum.map(&Enum.join(&1))
    |> Enum.map(&to_protein/1)
    |> ok
  end

  @doc """
  Given a codon, return the corresponding protein

  UGU -> Cysteine
  UGC -> Cysteine
  UUA -> Leucine
  UUG -> Leucine
  AUG -> Methionine
  UUU -> Phenylalanine
  UUC -> Phenylalanine
  UCU -> Serine
  UCC -> Serine
  UCA -> Serine
  UCG -> Serine
  UGG -> Tryptophan
  UAU -> Tyrosine
  UAC -> Tyrosine
  UAA -> STOP
  UAG -> STOP
  UGA -> STOP
  """
  @spec of_codon(String.t()) :: { atom, String.t() }
  def of_codon(codon) do
    codon |> to_protein() |> ok
  end

  defp to_protein(codon) do
    codon_to_protein = %{
      "AUG" => "Methionine",
      "UUU" => "Phenylalanine",
      "UUC" => "Phenylalanine",
      "UUA" => "Leucine",
      "UUG" => "Leucine",
      "UCU" => "Serine",
      "UCC" => "Serine",
      "UCA" => "Serine",
      "UCG" => "Serine",
      "UAU" => "Tyrosine",
      "UAC" => "Tyrosine",
      "UGU" => "Cysteine",
      "UGC" => "Cysteine",
      "UGG" => "Tryptophan",
      "UAA" => "STOP",
      "UAG" => "STOP",
      "UGA" => "STOP",
    }

    codon_to_protein[codon]
  end

  defp ok(protein), do: { :ok, protein }
end

