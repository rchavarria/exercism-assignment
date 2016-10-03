defmodule Prime do

  def nth(0), do: raise "Can't be zero"
  def nth(count) do
    primes_count_down(2, true, count)
  end

  defp primes_count_down(prime, _, 0), do: prime - 1
  defp primes_count_down(prime, false, count) do
    primes_count_down(prime + 1, is_prime?(prime + 1), count)
  end
  defp primes_count_down(prime, true, count) do
    primes_count_down(prime + 1, is_prime?(prime + 1), count - 1)
  end

  defp is_prime?(candidate) do
    is_divisible?(candidate - 1, candidate)
  end

  defp is_divisible?(1, _), do: true
  defp is_divisible?(factor, candidate) when rem(candidate, factor) != 0 do
    is_divisible?(factor - 1, candidate)
  end
  defp is_divisible?(_, _), do: false

end
