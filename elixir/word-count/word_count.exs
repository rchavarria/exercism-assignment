defmodule Words do

  @split_on_non_alphanumeric ~r/[^[:alnum:]-]/u

  def count(sentence) do
    Regex.split(@split_on_non_alphanumeric, sentence)
      |> Enum.filter(fn w -> String.length(w) > 0 end)
      |> Enum.map(&String.downcase/1)
      |> Enum.reduce(%{}, &word_reducer/2)
  end
  
  defp word_reducer(word, word_map) do
    Map.update(word_map, word, 1, fn c -> c + 1 end)
  end

end
