defmodule Prime do

  @first_prime 2

  def nth(0), do: raise "Can't be zero"
  def nth(count) do
    @first_prime
    |> Stream.iterate(&increment_by_one/1)
    |> Stream.filter(&is_prime?/1)
    |> Enum.at(count - 1)
  end

  defp increment_by_one(n), do: n + 1

  defp is_prime?(@first_prime), do: true
  defp is_prime?(n) do
    max = round(:math.sqrt(n))
    @first_prime..max |> Enum.all?(fn x -> rem(n, x) != 0 end)
  end

end
