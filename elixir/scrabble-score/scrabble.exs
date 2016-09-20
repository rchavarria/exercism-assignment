defmodule Scrabble do

  @letter_scores [
    { ~w(A E I O U L N R S T),  1 },
    { ~w(D G)                ,  2 },
    { ~w(B C M P)            ,  3 },
    { ~w(F H V W Y)          ,  4 },
    { ~w(K)                  ,  5 },
    { ~w(J X)                ,  8 },
    { ~w(Q Z)                , 10 }
  ]

  @doc """
  Calculate the scrabble score for the word.
  """
  @spec score(String.t) :: non_neg_integer
  def score(word) do
    word |> split_into_characters
         |> compute_scores
         |> Enum.sum
  end

  # defp split_into_characters(word), do: String.split(word, "", trim: true)
  defp split_into_characters(word) do
    word |> String.trim
         |> String.upcase
         |> String.graphemes
  end

  defp compute_scores(characters), do: Enum.map(characters, &find_score_for/1)

  defp find_score_for(letter) do
    { _, score } = Enum.find(@letter_scores, fn { letters, _ } -> letter in letters end)
    score
  end

end
