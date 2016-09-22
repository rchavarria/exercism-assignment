defmodule Anagram do
  @doc """
  Returns all candidates that are anagrams of, but not equal to, 'base'.
  """
  @spec match(String.t, [String.t]) :: [String.t]
  def match(base, candidates) do
    anagram_to_search = hash(base)
    candidates
    |> Enum.filter(&(not_source_word(&1, base)))
    |> Enum.filter(&(hash(&1) == anagram_to_search))
  end

  defp not_source_word(candidate, source) do
    String.downcase(candidate) != source
  end

  defp hash(word), do: word |> String.downcase |> String.graphemes |> Enum.sort |> Enum.join

end
