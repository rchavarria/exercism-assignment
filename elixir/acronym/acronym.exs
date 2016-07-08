defmodule Acronym do
  @doc """
  Generate an acronym from a string.
  "This is a string" => "TIAS"
  """
  @spec abbreviate(String.t()) :: String.t()
  def abbreviate(string) do
    capture_capital_letter = ~r{([A-Z])}
    word_separator = ~r{[[:blank:]-]}

    string
    |> String.replace(capture_capital_letter, " \\1")
    |> String.split(word_separator)
    |> Enum.filter(&(String.length(&1) > 0))
    |> Enum.map_join("", &String.first/1)
    |> String.upcase
  end

end
