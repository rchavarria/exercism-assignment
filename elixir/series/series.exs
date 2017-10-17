defmodule StringSeries do

  def slices(str, size) do
    times = String.length(str) - size 
    do_slices(str, times, size)
  end

  defp do_slices(_str, _times, size) when size <= 0, do: []
  defp do_slices(_str, times, _size) when times < 0, do: []
  defp do_slices(str, times, size) do
    0..times
    |> Enum.map(fn i -> String.slice(str, i, size) end)
  end

end

