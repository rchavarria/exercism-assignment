defmodule BracketPush do

  @opening_brackets [ "{" ]
  @closing_brackets [ "}" ]

  @doc """
  Checks that all the brackets and braces in the string are matched correctly, and nested correctly
  """
  @spec check_brackets(String.t) :: boolean
  def check_brackets(str) do
    graphemes = String.graphemes(str)

    openings = graphemes |> Enum.filter(fn g -> g in @opening_brackets end) |> length
    closings = graphemes |> Enum.filter(fn g -> g in @closing_brackets end) |> length

    (openings - closings) == 0
  end
end
