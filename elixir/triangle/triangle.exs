defmodule Triangle do

  def kind(a, b, c) do
    sides = Enum.sort [a, b, c]
    with { :ok, sides } <- must_be_greater_than_zero(sides),
         { :ok, sides } <- do_not_violate_inequality(sides) do
      is_kind(sides)
    end
  end

  defp must_be_greater_than_zero(sides) do
    all_positives = Enum.all?(sides, &(&1 > 0))
    case all_positives do
      false -> error("all side lengths must be positive" )
      true  -> ok(sides)
    end
  end

  defp do_not_violate_inequality(sides) do
    [x, y, z] = sides

    valid_sides = (z < x + y)
    case valid_sides do
      false -> error("side lengths violate triangle inequality" )
      true  -> ok(sides)
    end
  end

  defp is_kind([ a, a, a ]), do: ok(:equilateral)
  defp is_kind([ a, a, _ ]), do: ok(:isosceles)
  defp is_kind([ _, a, a ]), do: ok(:isosceles)
  defp is_kind(_), do: ok(:scalene)

  defp ok(payload), do: { :ok, payload }
  defp error(message), do: { :error, message }

end
