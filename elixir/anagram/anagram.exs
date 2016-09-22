defmodule Anagram do
  @doc """
  Returns all candidates that are anagrams of, but not equal to, 'base'.
  """
  @spec match(String.t, [String.t]) :: [String.t]
  def match(base, candidates) do
    candidates
    |> Enum.filter(&(not_source_word(&1, base)))
    |> Enum.filter(&(candidate_matches_word(&1, base)))
  end

  defp not_source_word(candidate, source) do
    String.downcase(candidate) != source
  end

  defp candidate_matches_word(candidate, source) do
    hash(candidate) == hash(source)
  end

  defp hash(word), do: word |> String.downcase |> String.graphemes |> Enum.sort |> Enum.join

end
