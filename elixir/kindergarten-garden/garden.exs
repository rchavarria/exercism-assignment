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
    rows = String.split(info_string, "\n")
    result = rows
            |> Enum.map(fn row -> String.graphemes(row) end)
            |> List.flatten
            |> decode_plants
            |> List.to_tuple

    IO.puts "Result #{inspect(result)}"

    %{
      :alice => result,
      :bob => {}
    }
  end

  defp decode_plants(plant_codes) do
    plant_codes
    |> Enum.map(fn plant -> @plants[plant] end)
  end

  def split_into_kids(info_string) do
    rows = String.split(info_string, "\n")
    rows_by_kid = rows
                  |> Enum.map(fn row ->
                    row
                    |> String.graphemes
                    |> Enum.chunk(2)
                    |> List.to_tuple
                  end)

    IO.puts "Rows by kid: #{inspect(rows_by_kid)}"

    unzipped = rows_by_kid |> Enum.unzip |> Tuple.to_list |> Enum.map(fn x -> List.flatten(x) end)
    IO.puts "Unzip: #{inspect(unzipped)}"

    unzipped
  end

end
