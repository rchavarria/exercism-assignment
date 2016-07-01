defmodule Bob do
  def hey(input) do
    cond do
      silence?(input) -> "Fine. Be that way!"
      asking?(input) -> "Sure."
      shouting?(input) -> "Whoa, chill out!"
      talking?(input) -> "Whatever."
    end
  end

  defp silence?(input), do: String.trim(input) == ""
  defp shouting?(input), do: String.upcase(input) == input and String.downcase(input) != input
  defp asking?(input), do: String.last(input) == "?"
  defp talking?(_), do: true

end
