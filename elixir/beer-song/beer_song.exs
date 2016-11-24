defmodule BeerSong do
  @doc """
  Get a single verse of the beer song
  """
  @spec verse(integer) :: String.t
  def verse(number) do
    current_bottles = number - 1

    """
    #{number_of_bottles(current_bottles)} bottle#{plural(current_bottles)} of beer on the wall, #{current_bottles |> number_of_bottles |> String.downcase} bottle#{plural(current_bottles)} of beer.
    #{pass_it_or_buy_it(current_bottles)}, #{remaining_bottles(current_bottles)} of beer on the wall.
    """
  end

  defp number_of_bottles(n) when n > 0, do: Integer.to_string(n)
  defp number_of_bottles(_), do: "No more"

  # defp plural(n) when n > 1, do: "s"
  defp plural(1), do: ""
  defp plural(_), do: "s"

  defp pass_it_or_buy_it(0), do: "Go to the store and buy some more"
  defp pass_it_or_buy_it(n), do: "Take #{take_n_down(n)} down and pass it around"

  defp take_n_down(n) when n > 1, do: "one"
  defp take_n_down(_), do: "it"

  defp remaining_bottles(n) when n > 2, do: "#{n - 1} bottles"
  defp remaining_bottles(2), do: "1 bottle"
  defp remaining_bottles(1), do: "no more bottles"
  defp remaining_bottles(0), do: "99 bottles"

  @doc """
  Get the entire beer song for a given range of numbers of bottles.
  """
  @spec lyrics(Range.t) :: String.t
  def lyrics, do: lyrics(100..1)
  def lyrics(range) do
    range
    |> Enum.map(&(verse(&1)))
    |> Enum.join("\n")
  end
end
