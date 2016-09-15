defmodule Raindrops do

  @noises [
    { 3, "Pling" },
    { 5, "Plang" },
    { 7, "Plong" }
  ]

  @spec convert(pos_integer) :: String.t
  def convert(n) do
    @noises |> Enum.filter(fn { key, noise } -> rem(n, key) == 0 end)
            |> Enum.map(fn { _, noise } -> noise end)
            |> emit_sound_for(n)
  end

  # return the sound if `n` is divisible by `key`
  defp convert_drop({ key, sound }, n) when rem(n, key) == 0, do: sound
  defp convert_drop(_, _), do: ""

  # select between a silence or all sounds
  defp emit_sound_for([], n), do: to_string(n)
  defp emit_sound_for(sounds, _), do: Enum.join(sounds)

end
