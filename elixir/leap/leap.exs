defmodule Year do

  @cadences [ 400, 100, 4 ]

  def leap_year?(year) do
    case leap_cadence_matrix(year) do
      [ 0, _, _ ] -> true
      [ _, 0, _ ] -> false
      [ _, _, 0 ] -> true
      _           -> false
    end
  end

  defp leap_cadence_matrix(year) do
    @cadences |> Enum.map(&(rem(year, &1)))
  end

end
