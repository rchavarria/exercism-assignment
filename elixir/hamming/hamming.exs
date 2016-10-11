defmodule Hamming do
  @spec hamming_distance([char], [char]) :: non_neg_integer
  def hamming_distance(strand1, strand2) do
    hamming(strand1, strand2, 0)
  end

  defp hamming([], [], distance), do: { :ok, distance }
  defp hamming([], strand2, _), do: { :error, "Lists must be the same length"}
  defp hamming(strand1, [], _), do: { :error, "Lists must be the same length"}
  defp hamming([ a | strand1 ], [ a | strand2 ], distance), do:
    hamming(strand1, strand2, distance)
  defp hamming([ a | strand1 ], [ b | strand2 ], distance), do:
    hamming(strand1, strand2, distance + 1)

end
