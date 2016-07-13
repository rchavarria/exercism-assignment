defmodule RunLengthEncoder do

  @doc """
  Generates a string where consecutive elements are represented as a data value and count.
  "HORSE" => "1H1O1R1S1E"
  For this example, assume all input are strings, that are all uppercase letters.
  It should also be able to reconstruct the data into its original form.
  "1H1O1R1S1E" => "HORSE"
  """
  @spec encode(String.t) :: String.t
  def encode(""), do: ""
  def encode(string) do
    { count_list, _ } = string
      |> String.graphemes
      |> Enum.reduce({ [], "" }, &count_similar_chars/2)

    { result_string, _ } = count_list
      |> Enum.reverse
      |> Enum.reduce({ "", 0 }, fn (count, { result_string, index }) ->
        result_string = result_string <> Integer.to_string(count) <> String.at(string, index)
        { result_string, index + count }
      end)
    result_string
  end

  defp count_similar_chars(current_char, { [], "" }) do
    { [1], current_char }
  end
  defp count_similar_chars(current_char, { count_list, current_char }) do
    [ current_count | tail ] = count_list
    { [ current_count + 1 | tail ], current_char }
  end
  defp count_similar_chars(current_char, { count_list, _ }) do
    { [ 1 | count_list ], current_char }
  end

  @spec decode(String.t) :: String.t
  def decode(string) do
    Regex.scan(~r{[0-9]+[A-Z]+}, string)
    |> Enum.flat_map(&(&1))
    |> Enum.map(&expand/1)
    |> Enum.join
  end

  defp expand(string) do
    character = String.last string
    digit = string
            |> String.replace(character, "")
            |> String.to_integer
    append("", character, digit)
  end

  defp append(string, _, 0), do: string
  defp append(string, character, times) do
    append(string <> character, character, times - 1)
  end

end
