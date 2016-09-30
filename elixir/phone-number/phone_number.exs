defmodule Phone do

  @invalid_numbers "0000000000"

  def number(raw) do
    raw |> only_valid_digits
        |> validate_length
  end

  defp only_valid_digits(raw) do
    raw |> validate_digits(Regex.match?(~r{[a-z]}, raw))
        |> String.replace(~r{[^0-9]}, "")
  end

  defp validate_digits(_, true), do: @invalid_numbers
  defp validate_digits(raw, false), do: raw

  defp validate_length(<<"1", num::binary-10>>), do: num 
  defp validate_length(<<_::binary-1, _::binary-10>>), do: @invalid_numbers
  defp validate_length(<<num::binary-10>>), do: num
  defp validate_length(_), do: @invalid_numbers

  def area_code(raw) do
    raw |> number |> String.slice(0..2)
  end

  def pretty(raw) do
    area_code = raw |> area_code
    exchange = raw |> exchange
    line_number = raw |> line_number

    "(#{area_code}) #{exchange}-#{line_number}"
  end

  defp exchange(raw), do: raw |> number |> String.slice(3..5)
  defp line_number(raw), do: raw |> number |> String.slice(6..9)

end
