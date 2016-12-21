defmodule School do

  def add(db, name, student_grade) do
    students = db |> grade(student_grade)
                  |> add_student(name)
    Map.put(db, student_grade, students)
  end

  defp add_student(nil, name), do: [ name ] 
  defp add_student(students, name), do: [ name | students ]

  def grade(db, grade) do
    db |> Map.get(grade)
       |> not_nil
  end

  defp not_nil(nil), do: []
  defp not_nil(x), do: x

  def sort(db) do
    db |> sort_keys
       |> Enum.map(fn key ->
         { key, sort_names(db, key) }
       end)
  end

  defp sort_keys(db), do: db |> Map.keys |> Enum.sort

  defp sort_names(db, key), do: db |> Map.get(key) |> Enum.sort

end
