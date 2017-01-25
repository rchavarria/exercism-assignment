defmodule Garden do
  @plants %{
    "R" => :radishes,
    "C" => :clover,
    "G" => :grass
  }

  @spec info(String.t(), list) :: map
  def info(info_string, student_names \\ nil) do
    rows = String.split(info_string, "\n")
    IO.puts "Rows: #{inspect(rows)}"

    result = Enum.map(rows, fn(row) -> 
              IO.puts "Each row is #{inspect(row)}"
              result = String.graphemes(row)
                       |> Enum.map(fn plant -> @plants[plant] end)
              IO.puts "partial result: #{inspect(result)}"
              result
            end)
            |> List.flatten
            |> List.to_tuple

    IO.puts "Result #{inspect(result)}"

    %{ :alice => result }
  end

end
