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
    |> Enum.chunk_by(&(&1))
    |> Enum.map_join(fn(x) -> "#{length(x)}#{List.first(x)}" end)
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
