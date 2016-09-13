defmodule Raindrops do

  @drops [
    { 3, "Pling" },
    { 5, "Plang" },
    { 7, "Plong" }
  ]

  @spec convert(pos_integer) :: String.t
  def convert(n) do
    @drops
    |> Enum.map(fn drop -> convert_drop(drop, n) end)
    |> Enum.join
    |> emit_sound_for(n)
  end

  # return the sound if `n` is divisible by `key`
  defp convert_drop({ key, sound }, n) when rem(n, key) == 0, do: sound
  defp convert_drop(_, _), do: ""

  # select between a silence or all sounds
  defp emit_sound_for("", n), do: to_string(n)
  defp emit_sound_for(sound, _), do: sound

end
