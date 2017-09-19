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
    |> process_proteins()
    |> verify_rna()
  end

  defp split_into_codons(rna) do
    rna
    |> String.codepoints()
    |> Enum.chunk_every(3)
    |> Enum.map(&Enum.join/1)
  end

  defp make_proteins(codons) do
    codons
    |> Enum.map(&to_protein/1)
    |> Enum.take_while(&(&1 != "STOP"))
  end

  defp process_proteins(proteins) do
    proteins
    |> Enum.reverse()
    |> Enum.reduce([], fn protein, processed -> 
      verify_protein(protein, processed)
    end)
  end

  defp verify_protein(nil, _processed_proteins), do: :error
  defp verify_protein(protein, processed_proteins), do: [ protein | processed_proteins ]

  defp verify_rna(:error), do: { :error, "invalid RNA" }
  defp verify_rna(rna), do: { :ok, rna }

  def of_codon(codon) do
    codon
    |> to_protein()
    |> verify()
  end

  defp to_protein(codon) do
    @codon_to_protein[codon]
  end

  defp verify(nil), do: { :error, "invalid codon" }
  defp verify(protein), do: { :ok, protein }
end

