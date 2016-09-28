defmodule BracketPush do

  @replacements ~r{[a-z\s]|\{\}|\[\]|\(\)}

  @doc """
  Checks that all the brackets and braces in the string are matched correctly, and nested correctly
  """
  @spec check_brackets(String.t) :: boolean
  def check_brackets(str) do
    replaced = String.replace(str, @replacements, "")

    replacement_took_place(str, replaced)
  end

  # all brackets have been replaced in pairs, they're ok
  defp replacement_took_place("", ""), do: true
  # there's been no replacement, there's no bracket pair
  defp replacement_took_place(a, a), do: false
  # there's been some replacement, call recursively until no bracket pair is left
  defp replacement_took_place(_, b), do: check_brackets(b)

end
