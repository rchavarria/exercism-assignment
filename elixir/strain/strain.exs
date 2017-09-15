defmodule Strain do
  def keep(list, fun) do
    filter(list, fun)
  end

  def discard(list, fun) do
    filter(list, &!fun.(&1))
  end

  defp filter(list, func) do
    for e <- list, func.(e), do: e
  end

end
