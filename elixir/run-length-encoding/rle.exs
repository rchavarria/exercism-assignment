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
                |> String.split("")
                |> Enum.reduce({ [], "" }, &count_similar_chars/2)

    [ _ | reversed_count ] = count_list

    { result_string, _ } = reversed_count
                          |> Enum.reverse
                          |> Enum.reduce({ "", 0 }, fn (count, acc) ->
                            { result_string, index } = acc
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
  defp count_similar_chars(current_char, { count_list, previous_char }) do
    { [ 1 | count_list ], previous_char }
  end

  @spec decode(String.t) :: String.t
  def decode(string) do

  end
end
