defmodule Words do

  @split_on_non_alphanumeric ~r/[^[:alnum:]|-]/u

  def count(sentence) do
    Regex.split(@split_on_non_alphanumeric, sentence)
      |> Enum.filter(fn w -> String.length(w) > 0 end)
      |> Enum.map(&String.downcase/1)
      |> Enum.reduce(%{}, &word_reducer/2)
  end
  
  defp word_reducer(word, word_map) do
    { _, reduced } = Map.get_and_update(word_map, word, &update_count/1)
    reduced
  end

  defp update_count(nil), do: { nil, 1 }
  defp update_count(current_count), do: { current_count, current_count + 1 }

end
