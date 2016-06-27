defmodule Bob do
  def hey(input) do
    cond do
      silence?(input) -> "Fine. Be that way!"
      shouting?(input) -> "Whoa, chill out!"
      asking?(input) -> "Sure."
      talking?(input) -> "Whatever."
    end
  end

  defp silence?(input), do: String.strip(input) == ""
  defp shouting?(input), do: String.upcase(input) == input and String.downcase(input) != input
  defp asking?(input), do: String.ends_with?(input, "?")
  defp talking?(input), do: true

end
