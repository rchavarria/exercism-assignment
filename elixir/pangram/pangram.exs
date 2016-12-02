defmodule Pangram do
  @invalid_graphemes ~r/[\W_0-9]/
  @minimum_alphabet_length 26

  def pangram?(sentence) do
    sentence
    |> valid_graphemes
    |> Enum.uniq
    |> match_alphabet_length
  end

  defp valid_graphemes(sentence) do
    sentence
    |> String.replace(@invalid_graphemes, "")
    |> String.graphemes
  end

  defp match_alphabet_length(graphemes) do
    graphemes |> Enum.count >= @minimum_alphabet_length
  end

end
