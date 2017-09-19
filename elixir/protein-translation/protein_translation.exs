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
    |> String.codepoints()
    |> Enum.chunk_every(3)
    |> Enum.map(&Enum.join(&1))
    |> Enum.map(&to_protein/1)
    |> Enum.take_while(fn protein -> protein != "STOP" end)
    |> Enum.filter(fn protein -> protein != nil end)
    |> verify
  end

  def of_codon(codon) do
    codon |> to_protein() |> verify
  end

  defp to_protein(codon) do
    @codon_to_protein[codon]
  end

  defp verify([]), do: { :error, "invalid RNA" }
  defp verify(nil), do: { :error, "invalid codon" }
  defp verify(protein), do: { :ok, protein }
end

