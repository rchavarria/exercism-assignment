defmodule Pangram do
  @minimum_alphabet_length 26

  def pangram?(sentence) do
    sentence
    |> String.replace(~r/[\W_0-9]/, "")
    |> String.graphemes
    |> Enum.uniq
    |> Enum.count >= @minimum_alphabet_length
  end

end
