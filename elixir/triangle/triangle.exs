defmodule Triangle do

  def kind(a, b, c) do
    [a, b, c]
    |> Enum.sort
    |> must_be_greater_than_zero
    |> do_not_violate_inequality
    |> is_kind
  end

  defp must_be_greater_than_zero(sides) do
    all_positives = Enum.all?(sides, &(&1 > 0))
    case all_positives do
      false -> error("all side lengths must be positive" )
      true  -> ok(sides)
    end
  end

  defp do_not_violate_inequality({ :error, _ } = error), do: error
  defp do_not_violate_inequality({ :ok, sides }) do
    [x, y, z] = sides

    valid_sides = (z < x + y)
    case valid_sides do
      false -> error("side lengths violate triangle inequality" )
      true  -> ok(sides)
    end
  end

  defp is_kind({ :error, _ } = error), do: error
  defp is_kind({ :ok, [ a, a, a ] }), do: ok(:equilateral)
  defp is_kind({ :ok, [ a, a, _ ] }), do: ok(:isosceles)
  defp is_kind({ :ok, [ _, a, a ] }), do: ok(:isosceles)
  defp is_kind({ :ok, _ }), do: ok(:scalene)

  defp ok(payload), do: { :ok, payload }
  defp error(message), do: { :error, message }

end
