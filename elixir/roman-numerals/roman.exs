defmodule Roman do

  @symbols [
    { "M",  1000 },
    { "CM",  900 },
    { "D",  500 },
    { "CD",  400 },
    { "C",  100 },
    { "XC",  90 },
    { "L",  50 },
    { "XL",  40 },
    { "X",  10 },
    { "IX",  9 },
    { "V",   5 },
    { "IV",  4 },
    { "I",   1 }
  ]

  @spec numerals(pos_integer) :: String.t
  def numerals(number) do
    append_symbol(number, Enum.at(@symbols, 0), 0, "")
  end

  defp append_symbol(0, _, _, roman), do: roman
  defp append_symbol(n, { roman_symbol, n_symbol }, index, roman) when n >= n_symbol do
    append_symbol(n - n_symbol, Enum.at(@symbols, index), index, roman <> roman_symbol)
  end
  defp append_symbol(n, _, index, roman) do
    append_symbol(n, Enum.at(@symbols, index + 1), index + 1, roman)
  end

end
