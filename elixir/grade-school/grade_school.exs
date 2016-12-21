defmodule School do

  def add(db, name, grade) do
    students = Map.get(db, grade)
    Map.put(db, grade, add_student(students, name))
  end

  defp add_student(nil, name), do: [ name ] 
  defp add_student(students, name), do: [ name | students ]

  def grade(db, grade) do
    Map.get(db, grade) |> not_nil
  end

  defp not_nil(nil), do: []
  defp not_nil(x), do: x

  def sort(db) do
    sorted_keys = db |> Map.keys |> Enum.sort
    sorted_keys |> Enum.map(fn key ->
      sorted_names = Map.get(db, key) |> Enum.sort
      { key, sorted_names }
    end)
  end

end
