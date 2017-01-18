defmodule FlattenArray do

  def flatten(list) do
    list |> _flatten([]) |> skip_nil
  end

  defp _flatten([], acc), do: acc
  defp _flatten([ head | tail ], acc), do: _flatten(head, _flatten(tail, acc))
  defp _flatten(list, acc), do: [ list | acc ]

  defp skip_nil([]), do: []
  defp skip_nil([ nil | tail ]), do: skip_nil(tail)
  defp skip_nil([ head | tail ]), do: [ head | skip_nil(tail) ]

end
