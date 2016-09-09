defmodule Raindrops do

  @spec convert(pos_integer) :: String.t
  def convert(n) when rem(n, 3) == 0 do "Pling" end
  def convert(n) when rem(n, 5) == 0 do "Plang" end
  def convert(n) when rem(n, 7) == 0 do "Plong" end
  def convert(n), do: to_string(n)

end
