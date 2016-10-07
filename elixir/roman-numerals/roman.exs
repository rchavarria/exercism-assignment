defmodule Roman do
  @spec numerals(pos_integer) :: String.t
  def numerals(number) do
    1..number
    |> Enum.map_join(fn _ -> "I" end)
    |> String.replace("IIIII", "V")
    |> String.replace("VV", "X")
    |> String.replace("VIIII", "IX")
    |> String.replace("IIII", "IV")

    |> String.replace("XXXXX", "L")
    |> String.replace("LL", "C")
    |> String.replace("LXXXX", "XC")
    |> String.replace("XXXX", "XL")

    |> String.replace("CCCCC", "D")
    |> String.replace("DD", "M")
    |> String.replace("DCCCC", "CM")
    |> String.replace("CCCC", "CD")
  end
end
