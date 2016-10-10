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
    append_symbol(number, hd(@symbols), "")
  end

  defp append_symbol(0, _, roman), do: roman
  defp append_symbol(n, { roman_symbol, n_symbol }, roman) when n >= n_symbol do
    append_symbol(n - n_symbol, { roman_symbol, n_symbol }, roman <> roman_symbol)
  end
  defp append_symbol(n, symbol, roman) do
    next_symbol = find_next_symbol(symbol)
    append_symbol(n, next_symbol, roman)
  end

  defp find_next_symbol({ _, current_n_symbol }) do
    Enum.find(@symbols, fn { _, n_symbol } -> n_symbol < current_n_symbol end)
  end

end
