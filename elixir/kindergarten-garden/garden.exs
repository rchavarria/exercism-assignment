defmodule Garden do
  @plants %{
    "R" => :radishes,
    "C" => :clover,
    "G" => :grass
  }

  @spec info(String.t(), list) :: map
  def info(info_string, student_names \\ nil) do
    rows = String.split(info_string, "\n")
    result = rows
            |> Enum.map(fn row -> String.graphemes(row) end)
            |> List.flatten
            |> decode_plants
            |> List.to_tuple

    IO.puts "Result #{inspect(result)}"

    %{ :alice => result }
  end

  defp decode_plants(plant_codes) do
    plant_codes
    |> Enum.map(fn plant -> @plants[plant] end)
  end

end
