defmodule LinkedList do
  @opaque t :: tuple()

  def new() do
    {}
  end

  def push(list, elem) do
    { elem, list }
  end

  def length({}), do: 0
  def length({ _elem, tail }) do
    1 + LinkedList.length(tail)
  end

  def empty?({}), do: true
  def empty?(_list), do: false

  def peek({}), do: { :error, :empty_list }
  def peek({ elem, _tail }) do
    { :ok, elem }
  end

  def tail({}), do: { :error, :empty_list }
  def tail({ _elem, next }) do
    { :ok, next }
  end

  def pop({}), do: { :error, :empty_list }
  def pop({ element, tail }) do
    { :ok, element, tail }
  end

  def from_list([]), do: {}
  def from_list([ head | tail ]) do
    { head, from_list(tail) }
  end

  def to_list({}), do: []
  def to_list({ elem, tail }) do
    [ elem | to_list(tail) ]
  end

  def reverse(list) do
    do_reverse(list, {})
  end

  defp do_reverse({}, reversed), do: reversed
  defp do_reverse({ elem, tail }, reversed) do
    do_reverse(tail, reversed |> LinkedList.push(elem))
  end
end
