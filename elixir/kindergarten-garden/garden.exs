defmodule Garden do
  @plants %{
    "R" => :radishes,
    "C" => :clover,
    "G" => :grass,
    "V" => :violets
  }

  @kids [ :alice, :bob ]

  @spec info(String.t(), list) :: map
  def info(info_string, student_names \\ nil) do
    plants_by_kid = split_into_kids(info_string)

    plants_and_kids = Enum.zip(@kids, plants_by_kid) |> Enum.into(%{})

    @kids |> Enum.reduce(plants_and_kids, fn kid, acc ->
      Map.update(acc, kid, {}, &(&1))
    end)
  end

  defp split_into_kids(info_string) do
    info_string
    |> String.split("\n")
    |> Enum.map(&chunk_by_2/1)
    |> List.zip
    |> Enum.map(&decode_plants/1)
  end

  defp chunk_by_2(row) do
    row |> String.graphemes |> Enum.chunk(2)
  end

  defp decode_plants(plants_for_a_single_kid) do
    plants_for_a_single_kid
    |> Tuple.to_list
    |> List.flatten
    |> Enum.map(fn plant -> @plants[plant] end)
    |> List.to_tuple
  end

end
