defmodule Strain do
  def keep(list, fun) do
    filter(list, fun)
  end

  def discard(list, fun) do
    filter(list, &(not fun.(&1)))
  end

  defp filter([], _fun), do: []
  defp filter(list = [ h | _ ], func) do
    _filter(list, func, func.(h))
  end

  defp _filter([ _head | tail ], fun, false) do
    filter(tail, fun)
  end
  defp _filter([ head | tail ], fun, true) do
    [ head | filter(tail, fun) ]
  end

end
