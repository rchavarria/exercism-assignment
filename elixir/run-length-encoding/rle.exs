defmodule RunLengthEncoder do

  @doc """
  Generates a string where consecutive elements are represented as a data value and count.
  "HORSE" => "1H1O1R1S1E"
  For this example, assume all input are strings, that are all uppercase letters.
  It should also be able to reconstruct the data into its original form.
  "1H1O1R1S1E" => "HORSE"
  """
  @spec encode(String.t) :: String.t
  def encode(string) do
    string
    |> String.graphemes
    |> group_by_grapheme
    |> Enum.map_join(&encode_each_group/1)
  end

  defp group_by_grapheme(graphemes) do
    graphemes |> Enum.chunk_by(&(&1))
  end

  defp encode_each_group(graphemes_group) do
    "#{length(graphemes_group)}#{List.first(graphemes_group)}" 
  end

  @spec decode(String.t) :: String.t
  def decode(string) do
    Regex.scan(~r{[[:digit:]]+[[:alpha:]]}, string)
    |> List.flatten
    |> Enum.map_join(&expand/1)
  end

  defp expand(string) do
    { digit, character } = Integer.parse(string)
    String.duplicate(character, digit)
  end

end
