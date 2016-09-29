defmodule Phone do

  @invalid_numbers "0000000000"

  @doc """
  Remove formatting from a phone number.

  Returns "0000000000" if phone number is not valid
  (10 digits or "1" followed by 10 digits)

  ## Examples

  iex> Phone.number("123-456-7890")
  "1234567890"

  iex> Phone.number("+1 (303) 555-1212")
  "3035551212"

  iex> Phone.number("867.5309")
  "0000000000"
  """
  @spec number(String.t) :: String.t
  def number(raw) do
    raw |> only_valid_digits
        |> validate_length
        |> Enum.join
  end

  defp only_valid_digits(raw) do
    raw |> validate_digits(Regex.match?(~r{[a-z]}, raw))
        |> String.replace(~r{[^0-9]}, "")
        |> String.graphemes
  end

  defp validate_digits(_, true), do: @invalid_numbers
  defp validate_digits(raw, false), do: raw

  defp validate_length([ "1" | number ]) when length(number) == 10 do
    number
  end
  defp validate_length([ _ | number ]) when length(number) == 10 do
    @invalid_numbers |> String.graphemes
  end
  defp validate_length(n) when length(n) == 10, do: n
  defp validate_length(_), do: @invalid_numbers |> String.graphemes

  @doc """
  Extract the area code from a phone number

  Returns the first three digits from a phone number,
  ignoring long distance indicator

  ## Examples

  iex> Phone.area_code("123-456-7890")
  "123"

  iex> Phone.area_code("+1 (303) 555-1212")
  "303"

  iex> Phone.area_code("867.5309")
  "000"
  """
  @spec area_code(String.t) :: String.t
  def area_code(raw) do
    raw |> number |> String.slice(0..2)
  end

  @doc """
  Pretty print a phone number

  Wraps the area code in parentheses and separates
  exchange and subscriber number with a dash.

  ## Examples

  iex> Phone.pretty("123-456-7890")
  "(123) 456-7890"

  iex> Phone.pretty("+1 (303) 555-1212")
  "(303) 555-1212"

  iex> Phone.pretty("867.5309")
  "(000) 000-0000"
  """
  @spec pretty(String.t) :: String.t
  def pretty(raw) do
    area_code = raw |> area_code
    exchange = raw |> exchange
    line_number = raw |> line_number

    "(#{area_code}) #{exchange}-#{line_number}"
  end

  defp exchange(raw), do: raw |> number |> String.slice(3..5)
  defp line_number(raw), do: raw |> number |> String.slice(6..9)

end
