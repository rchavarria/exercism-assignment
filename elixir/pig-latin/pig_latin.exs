defmodule PigLatin do

  @allowed_starts ~w{a e i o u yt xr}

  def translate(phrase) do
    phrase
    |> String.split(" ")
    |> Enum.map(&translate_word/1)
    |> Enum.join(" ")
  end

  def translate_word(phrase) do
    prefix = phrase
             |> String.codepoints()
             |> until_valid_start([])
    suffix = String.slice(phrase, String.length(prefix), String.length(phrase))

    # prefix <> suffix <> "ay"
    suffix <> prefix <> "ay"
  end

  defp until_valid_start(phrase, prefix) do
    valid_start = @allowed_starts |> Enum.any?(fn start ->
      phrase |> Enum.join() |> String.starts_with?(start)
    end)

    continue_until_valid(phrase, prefix, valid_start)
  end

  defp continue_until_valid(_phrase, prefix, true) do
    prefix
    |> Enum.reverse()
    |> Enum.join()
  end
  defp continue_until_valid(phrase = [ "q", "u" | tail ], prefix, false) do
    until_valid_start(tail, [ "u", "q" | prefix ])
  end
  defp continue_until_valid(phrase = [ first | tail ], prefix, false) do
    until_valid_start(tail, [ first | prefix ])
  end

end

