defmodule School do

  def add(db, name, grade) do
    Map.update(db, grade, [ name ], &( [ name | &1 ] ))
  end

  def grade(db, grade) do
    db |> Map.get(grade, [])
       |> Enum.sort
  end

  def sort(db) do
    Enum.map(db, fn { key, _ } -> { key, grade(db, key) } end)
  end

end
