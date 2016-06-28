defmodule Words do
  @doc """
  Count the number of words in the sentence.

  Words are compared case-insensitively.
  """
  @spec count(String.t) :: map
  def count(sentence) do
    words = String.split(sentence, " ")
    words |> Enum.reduce(%{}, &word_reducer/2)
  end
  
  defp word_reducer(word, word_count) do
    { _, reduced } = Map.get_and_update(word_count, word, &update_count/1)
    reduced
  end

  defp update_count(nil), do: { nil, 1 }
  defp update_count(current_count), do: { current_count, current_count + 1 }

end
