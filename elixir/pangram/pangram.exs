defmodule Pangram do
  @invalid_graphemes ~r/[^a-z]/
  @alphabet_length 26

  def pangram?(sentence) do
    sentence
    |> valid_graphemes
    |> Enum.uniq
    |> match_alphabet_length
  end

  defp valid_graphemes(sentence) do
    sentence
    |> String.downcase
    |> String.replace(@invalid_graphemes, "")
    |> String.graphemes
  end

  defp match_alphabet_length(graphemes) do
    graphemes |> Enum.count == @alphabet_length
  end

end
