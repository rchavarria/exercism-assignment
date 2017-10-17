defmodule TwelveDays do

  @ordinals ~w(
    zeroth
    first
    second
    third
    fourth
    fifth
    sixth
    seventh
    eighth
    ninth
    tenth
    eleventh
    twelfth
  )

  @gifts [
    "no gift for zero",
    "no gift for one",
    "two Turtle Doves",
    "three French Hens",
    "four Calling Birds",
    "five Gold Rings",
    "six Geese-a-Laying",
    "seven Swans-a-Swimming",
    "eight Maids-a-Milking",
    "nine Ladies Dancing",
    "ten Lords-a-Leaping",
    "eleven Pipers Piping",
    "twelve Drummers Drumming",
  ]

  def verse(number) do
    [
      "On the #{ordinal(number)} day of Christmas my true love gave to me",
      "#{additional_gifts(number)}#{gifts_connection(number)}a Partridge in a Pear Tree."
    ]
    |> Enum.join(", ")
  end

  defp ordinal(n), do: @ordinals |> Enum.at(n)

  defp additional_gifts(n), do: gifts(n) |> Enum.join(", ")

  defp gifts(1), do: []
  defp gifts(n), do: [ @gifts |> Enum.at(n) | gifts(n - 1) ]

  defp gifts_connection(1), do: ""
  defp gifts_connection(_), do: ", and "

  def verses(starting_verse, ending_verse) do
    starting_verse..ending_verse
    |> Enum.map(&verse/1)
    |> Enum.join("\n")
  end

  def sing, do: verses(1, 12)
end
