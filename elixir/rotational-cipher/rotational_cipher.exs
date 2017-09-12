defmodule RotationalCipher do

  @lowercase ?a..?z
  @uppercase ?A..?Z
  @alphabet_length 26

  def rotate(text, shift) do
    (for << char <- text >>, do: rotate_char(char, shift))
    |> to_string()
  end

  defp rotate_char(char, shift) when char in @lowercase do
    rotate_anycase(char, shift, ?a)
  end
  defp rotate_char(char, shift) when char in @uppercase do
    rotate_anycase(char, shift, ?A)
  end
  defp rotate_char(char, _shift), do: char

  defp rotate_anycase(char, shift, base) do
    rem(char + shift - base, @alphabet_length) + base
  end

end

