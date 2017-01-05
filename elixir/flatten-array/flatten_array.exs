defmodule FlattenArray do

  def flatten(list) do
    list |> _flatten |> skip_nil
  end

  defp _flatten([]), do: []
  defp _flatten([ head | tail ]), do: _flatten(head) ++ _flatten(tail)
  defp _flatten(a), do: [a]

  defp skip_nil([]), do: []
  defp skip_nil([ nil | tail ]), do: skip_nil(tail)
  defp skip_nil([ head | tail ]), do: [ head | skip_nil(tail) ]

end
