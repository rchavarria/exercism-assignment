defmodule Matrix do
  defstruct matrix: nil

  @doc """
  Convert an `input` string, with rows separated by newlines and values
  separated by single spaces, into a `Matrix` struct.
  """
  @spec from_string(input :: String.t()) :: %Matrix{}
  def from_string(input) do
    %Matrix{ matrix: input }
  end

  @doc """
  Write the `matrix` out as a string, with rows separated by newlines and
  values separated by single spaces.
  """
  @spec to_string(matrix :: %Matrix{}) :: String.t()
  def to_string(matrix) do
    matrix.matrix
  end

  @doc """
  Given a `matrix`, return its rows as a list of lists of integers.
  """
  @spec rows(matrix :: %Matrix{}) :: list(list(integer))
  def rows(matrix) do
    matrix.matrix
    |> String.split("\n")
    |> Enum.map(&to_integer_list/1)
  end

  defp to_integer_list(line) do
    line
    |> String.split()
    |> Enum.map(&String.to_integer/1)
  end

  @doc """
  Given a `matrix` and `index`, return the row at `index`.
  """
  @spec row(matrix :: %Matrix{}, index :: integer) :: list(integer)
  def row(matrix, index) do
    matrix |> rows |> Enum.at(index)
  end

  @doc """
  Given a `matrix`, return its columns as a list of lists of integers.

  An algorithm can be found here, but it's cryptic:
  https://gist.github.com/pmarreck/6e054c162844e9d83d89

  Here is a post with better info:
  http://langintro.com/elixir/article2/
  """
  @spec columns(matrix :: %Matrix{}) :: list(list(integer))
  def columns(matrix) do
    rows = matrix |> rows()
    number_of_columns = rows |> hd() |> length()
    for i <- 0..number_of_columns - 1, do: extract_column(rows, i)
  end

  defp extract_column(rows, index) do
    rows |> Enum.map(&Enum.at(&1, index))
  end

  @doc """
  Given a `matrix` and `index`, return the column at `index`.
  """
  @spec column(matrix :: %Matrix{}, index :: integer) :: list(integer)
  def column(matrix, index) do
    matrix |> columns |> Enum.at(index)
  end
end

