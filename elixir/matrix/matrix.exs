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
    |> Enum.map(fn line ->
      line
      |> String.split(" ")
      |> Enum.map(&String.to_integer/1)
    end)
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
    matrix |> rows |> transpose([])
  end

  def transpose([], transposed) do
    reverse_rows(transposed, [])
  end

  def transpose([ first_row | other_rows ], transposed) do
    new_transposed = make_column(first_row, transposed)
    transpose(other_rows, new_transposed)
  end

  def make_column([], resulting_col), do: resulting_col
  def make_column([ first_item | other_items ], []) do
    [ [first_item] | make_column(other_items, []) ]
  end
  def make_column([ first_item | other_items ], [ first_row | other_rows ]) do
    [ [first_item | first_row] | make_column(other_items, other_rows) ]
  end

  def reverse_rows([], result), do: Enum.reverse(result)
  def reverse_rows([first | others], result) do
    reverse_rows(others, [Enum.reverse(first) | result])
  end

  @doc """
  Given a `matrix` and `index`, return the column at `index`.
  """
  @spec column(matrix :: %Matrix{}, index :: integer) :: list(integer)
  def column(matrix, index) do
    matrix |> columns |> Enum.at(index)
  end
end

