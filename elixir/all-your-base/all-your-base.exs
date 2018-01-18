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
    with { :ok, value }        <- to_base_10(digits, base_a, 0),
         { :ok, new_digits }   <- from_base_10(value, base_b, []),
         { :ok, final_digits } <- fix_digit_list(new_digits)
    do
      final_digits
    else
      err -> err
    end
  end

  defp to_base_10([], _base, exponent), do: { :ok, exponent }
  defp to_base_10([ digit | _tail ], _base, _exponent) when digit < 0, do: nil
  defp to_base_10([ digit | _tail ], base, _exponent) when digit >= base, do: nil
  defp to_base_10([ digit | tail ], base, exponent) do
    to_base_10(tail, base, exponent * base + digit)
  end

  defp from_base_10(0, _base, digits), do: { :ok, digits }
  defp from_base_10(number, base, digits) do
    from_base_10(div(number, base), base, [ rem(number, base) | digits ])
  end

  defp fix_digit_list([]    ), do: {:ok, [0]}
  defp fix_digit_list(digits), do: {:ok, digits}

end
