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

    # IO.puts "Result #{inspect(result)}"

    rows_by_kid = split_into_kids(info_string)

    tuppled = Enum.zip(@kids, rows_by_kid)
    IO.puts "tuppled: #{inspect(tuppled)}"

    together = tuppled |> Enum.into %{}

    result = @kids |> Enum.reduce(together, fn kid, acc ->
      Map.update(acc, kid, {}, &(&1))
    end)

    result
  end

  defp decode_plants(plant_codes) do
    plant_codes
    |> Enum.map(fn plant -> @plants[plant] end)
  end

  def split_into_kids(info_string) do
    IO.puts "\ninfo_string: #{info_string}"

    rows = String.split(info_string, "\n")
    rows_by_kid = rows
                  |> Enum.map(fn row ->
                    row
                    |> String.graphemes
                    |> Enum.chunk(2)
                  end)

    IO.puts "Rows by kid: #{inspect(rows_by_kid)}"

    zipped_list = rows_by_kid |> List.zip
    IO.puts "zipped_list: #{inspect(zipped_list)}"

    untuppled = zipped_list |> Enum.map(&Tuple.to_list/1)
    IO.puts "untuppled: #{inspect(untuppled)}"

    untuppled_flatten = untuppled |> Enum.map(&List.flatten/1) |> Enum.map(&decode_plants/1) |> Enum.map(&List.to_tuple/1)
    IO.puts "untuppled_flatten: #{inspect(untuppled_flatten)}"

    untuppled_flatten
  end

end
