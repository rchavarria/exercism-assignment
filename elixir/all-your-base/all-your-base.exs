defmodule AllYourBase do
  @doc """
  Given a number in base a, represented as a sequence of digits, converts it to base b,
  or returns nil if either of the bases are less than 2
  """

  @spec convert(list, integer, integer) :: list
  def convert([], _base_a, _base_b), do: nil
  def convert(_digits, base_a, _base_b) when base_a <= 1, do: nil
  def convert(_digits, _base_a, base_b) when base_b <= 1, do: nil
  def convert(digits, base_a, base_b) do
    digits
    |> check_digits(base_a)
    |> verified_convert(digits, base_a, base_b)
  end

  defp check_digits([], _base), do: true
  defp check_digits([ digit | tail ], base) when digit >= 0 and digit < base do
    check_digits(tail, base)
  end
  defp check_digits(_digits, _base), do: false

  defp verified_convert(false, _digits, _base_a, _base_b), do: nil
  defp verified_convert(true, digits, base_a, base_b) do
    base_10 = to_base_10(digits |> Enum.reverse(), base_a, 0)
    from_base_10(base_10, base_b, [])
  end

  defp to_base_10([], _base, _exponent), do: 0
  defp to_base_10([ digit | _tail ], _base, _exponent) when digit < 0, do: nil
  defp to_base_10([ digit | tail ], base, exponent) do
    number = digit * :math.pow(base, exponent) |> round()
    number + to_base_10(tail, base, exponent + 1)
  end

  defp from_base_10(0, _base, []), do: [0]
  defp from_base_10(0, _base, digits), do: digits
  defp from_base_10(number, base, digits) do
    from_base_10(div(number, base), base, [ rem(number, base) | digits ])
  end

end
