defmodule RotationalCipher do

  @alphabet_length 26

  def rotate(text, 0), do: text
  def rotate(text, @alphabet_length), do: text
  def rotate(text, shift) do
    text
    |> String.to_charlist()
    |> Enum.map(fn char -> rotate_char(char, shift) end)
    |> IO.chardata_to_string()
  end

  defp rotate_char(char, shift) when char >= ?a and char <= ?z do
    rotate_anycase(char, shift, ?a)
  end
  defp rotate_char(char, shift) when char >= ?A and char <= ?Z do
    rotate_anycase(char, shift, ?A)
  end
  defp rotate_char(char, _shift), do: char

  defp rotate_anycase(char, shift, base) do
    Integer.mod(char + shift - base, @alphabet_length) + base
  end

end

