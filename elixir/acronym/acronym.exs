defmodule Acronym do
  @doc """
  Generate an acronym from a string.
  "This is a string" => "TIAS"
  """
  @spec abbreviate(String.t()) :: String.t()
  def abbreviate(string) do
    string
    |> scan_first_and_capital_letters
    |> Enum.join
    |> String.upcase
  end

  defp scan_first_and_capital_letters(string) do
    first_and_capital = ~r{\b[a-z]|[A-Z]}
    Regex.scan(first_and_capital, string)
  end

end
