defmodule StringSeries do

  def slices(_str, size) when size < 1, do: []
  def slices(str, size) do
    str
    |> String.graphemes
    |> Enum.chunk(size, 1)
    |> Enum.map(&Enum.join/1)
  end

end

