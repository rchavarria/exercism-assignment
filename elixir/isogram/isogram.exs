defmodule Isogram do
  @doc """
  Determines if a word or sentence is an isogram
  """
  @spec isogram?(String.t) :: boolean
  def isogram?(sentence) do
    original_count = sentence |> sanitize |> Enum.count
    uniq_count = sentence |> sanitize |> Enum.uniq |> Enum.count

    original_count == uniq_count
  end

  defp sanitize(sentence) do
    sentence
    |> String.replace(~r{[ -]}, "")
    |> String.graphemes
  end

end
