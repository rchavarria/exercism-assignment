defmodule BeerSong do
  @of_beer "of beer"
  @on_the_wall "of beer on the wall"

  @doc """
  Get a single verse of the beer song
  """
  @spec verse(integer) :: String.t
  def verse(n) do
    """
    #{n - 1 |> bottles} #{@on_the_wall}, #{n - 1 |> bottles |> String.downcase} #{@of_beer}.
    #{pass_it_or_buy_it(n - 1)}, #{n - 2 |> bottles |> String.downcase} #{@on_the_wall}.
    """
  end

  defp bottles(n) when n < 0, do: "99 bottles"
  defp bottles(0), do: "No more bottles"
  defp bottles(n), do: "#{n} bottle#{plural(n)}"

  defp plural(1), do: ""
  defp plural(_), do: "s"

  defp pass_it_or_buy_it(0), do: "Go to the store and buy some more"
  defp pass_it_or_buy_it(n), do: "Take #{take_n_down(n)} down and pass it around"

  defp take_n_down(1), do: "it"
  defp take_n_down(_), do: "one"

  @doc """
  Get the entire beer song for a given range of numbers of bottles.
  """
  @spec lyrics(Range.t) :: String.t
  def lyrics(range \\ 100..1) do
    range
    |> Enum.map(&(verse(&1)))
    |> Enum.join("\n")
  end
end
