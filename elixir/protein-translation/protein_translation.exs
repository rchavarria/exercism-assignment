defmodule ProteinTranslation do
  @codon_to_protein %{
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

  def of_rna(rna) do
    rna
    |> split_into_codons()
    |> make_proteins()
    |> take_until_stop()
    |> verify()
  end

  defp split_into_codons(rna) do
    rna
    |> String.codepoints()
    |> Enum.chunk_every(3)
    |> Enum.map(&Enum.join/1)
  end

  defp remove_invalid(proteins) do
    proteins
    |> Enum.filter(&(&1 != nil))
  end

  defp make_proteins(codons) do
    codons
    |> Enum.map(&to_protein/1)
    |> remove_invalid()
  end

  defp take_until_stop(proteins) do
    proteins
    |> Enum.take_while(&(&1 != "STOP"))
  end

  def of_codon(codon) do
    codon
    |> to_protein()
    |> verify()
  end

  defp to_protein(codon) do
    @codon_to_protein[codon]
  end

  defp verify([]), do: { :error, "invalid RNA" }
  defp verify(nil), do: { :error, "invalid codon" }
  defp verify(protein), do: { :ok, protein }
end

