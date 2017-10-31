defmodule LinkedList do
  @opaque t :: tuple()

  defstruct [ elem: nil, tail: nil ]
  
  @empty_list_error { :error, :empty_list }

  def new() do
    %LinkedList{}
  end

  def push(list, elem) do
    %LinkedList{ elem: elem, tail: list }
  end

  def length(%LinkedList{ elem: nil }), do: 0
  def length(list) do
    1 + LinkedList.length(list.tail)
  end

  def empty?(%LinkedList{ elem: nil }), do: true
  def empty?(_list), do: false

  def peek(%LinkedList{ elem: nil }), do: @empty_list_error
  def peek(list) do
    { :ok, list.elem }
  end

  def tail(%LinkedList{ elem: nil }), do: @empty_list_error
  def tail(list) do
    { :ok, list.tail }
  end

  def pop(%LinkedList{ elem: nil }), do: @empty_list_error
  def pop(list) do
    { :ok, list.elem, list.tail }
  end

  def from_list([]), do: %LinkedList{}
  def from_list([ head | tail ]) do
    %LinkedList{ elem: head, tail: from_list(tail) }
  end

  def to_list(%LinkedList{ elem: nil }), do: []
  def to_list(list) do
    [ list.elem | to_list(list.tail) ]
  end

  def reverse(list) do
    do_reverse(list, %LinkedList{})
  end

  defp do_reverse(%LinkedList{ elem: nil }, reversed), do: reversed
  defp do_reverse(list, reversed) do
    do_reverse(list.tail, reversed |> LinkedList.push(list.elem))
  end
end
