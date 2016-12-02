defmodule Isogram do
  @invalid_graphemes ~r{\W}u

  @doc """
  Determines if a word or sentence is an isogram
  """
  @spec isogram?(String.t) :: boolean
  def isogram?(sentence) do
    sentence
    |> valid_graphemes
    |> are_isogram?
  end

  defp valid_graphemes(sentence) do
    sentence
    |> String.replace(@invalid_graphemes, "")
    |> String.graphemes
  end

  defp are_isogram?(graphemes) do
    length(graphemes) == length(Enum.uniq(graphemes))
  end

end
