defmodule TwelveDays do
  @ordinals %{
    1 => "first",
      2 => "second",
      3 => "third",
      4 => "fourth",
      5 => "fifth",
      6 => "sixth",
      7 => "seventh",
      8 => "eighth",
      9 => "ninth",
      10 => "tenth",
      11 => "eleventh",
      12 => "twelfth",
  }

  @gifts %{
    2 => "two Turtle Doves",
      3 => "three French Hens",
      4 => "four Calling Birds",
      5 => "five Gold Rings",
      6 => "six Geese-a-Laying",
      7 => "seven Swans-a-Swimming",
      8 => "eight Maids-a-Milking",
      9 => "nine Ladies Dancing",
      10 => "ten Lords-a-Leaping",
      11 => "eleven Pipers Piping",
      12 => "twelve Drummers Drumming",
  }

  def verse(number) do
    [
      "On the #{ordinal(number)} day of Christmas my true love gave to me",
      "#{additional_gifts(number)}#{gifts_connection(number)}a Partridge in a Pear Tree."
    ]
    |> Enum.join(", ")
  end

  defp ordinal(n), do: @ordinals[n]

  defp additional_gifts(n), do: gifts(n) |> Enum.join(", ")

  defp gifts(1), do: []
  defp gifts(n), do: [ @gifts[n] | gifts(n - 1) ]

  defp gifts_connection(1), do: ""
  defp gifts_connection(_), do: ", and "

  def verses(starting_verse, ending_verse) do
    starting_verse..ending_verse
    |> Enum.map(&verse/1)
    |> Enum.join("\n")
  end

  def sing, do: verses(1, 12)
end
