defmodule BracketPush do

  @replacements ~r{[a-z\s]|\{\}|\[\]|\(\)}

  @doc """
  Checks that all the brackets and braces in the string are matched correctly, and nested correctly
  """
  @spec check_brackets(String.t) :: boolean
  def check_brackets(str) do
    should_replace_brackets?(str, Regex.match?(@replacements, str))
  end

  defp should_replace_brackets?("", _), do: true
  defp should_replace_brackets?(_, false), do: false
  defp should_replace_brackets?(str, true) do
    check_brackets(String.replace(str, @replacements, ""))
  end

end
