defmodule Acronym do
  @doc """
  Generate an acronym from a string.
  "This is a string" => "TIAS"
  """
  @spec abbreviate(String.t()) :: String.t()
  def abbreviate(string) do
    string
    |> highlight_mixed_capital_letters
    |> split_into_non_empty_words
    |> extract_firts_capitalized_letter
    |> Enum.join
  end

  defp highlight_mixed_capital_letters(string) do
    capture_capital_letter = ~r{([A-Z])}
    String.replace(string, capture_capital_letter, " \\1")
  end

  defp split_into_non_empty_words(string) do
    word_separator = ~r{[[:blank:]-]}

    string
    |> String.split(word_separator)
    |> Enum.filter(&(String.length(&1) > 0))
  end

  defp extract_firts_capitalized_letter(non_empty_words) do
    non_empty_words
    |> Enum.map(&String.first/1)
    |> Enum.map(&String.upcase/1)
  end

end
