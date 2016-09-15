defmodule Raindrops do

  @noises [
    { 3, "Pling" },
    { 5, "Plang" },
    { 7, "Plong" }
  ]

  @spec convert(pos_integer) :: String.t
  def convert(n) do
    @noises |> Enum.filter(fn { key, noise } -> rem(n, key) == 0 end)
            |> extract_noises
            |> emit_sound_for(n)
  end

  defp extract_noises(noises) do
    noises |> Enum.map(fn { _, noise } -> noise end)
  end

  # select between a silence or all sounds
  defp emit_sound_for([], n), do: to_string(n)
  defp emit_sound_for(sounds, _), do: Enum.join(sounds)

end
