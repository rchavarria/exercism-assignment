defmodule ListOps do
  # Please don't use any external modules (especially List) in your
  # implementation. The point of this exercise is to create these basic functions
  # yourself.
  #
  # Note that `++` is a function from an external module (Kernel, which is
  # automatically imported) and so shouldn't be used either.

  @spec count(list) :: non_neg_integer
  def count(l) do
    _count(l, 0)
  end
  defp _count([], n), do: n
  defp _count([ _ | tail ], n), do: _count(tail, n + 1)

  @spec reverse(list) :: list
  def reverse(l) do
    _reverse(l, [])
  end
  defp _reverse([], reversed), do: reversed
  defp _reverse([ head | tail ], reversed), do: _reverse(tail, [ head | reversed ])

  @spec map(list, (any -> any)) :: list
  def map(l, f) do
    _map(l, f)
  end
  defp _map([], _), do: []
  defp _map([ head | tail ], f) do
    mapped_head = f.(head)
    [ mapped_head | _map(tail, f) ]
  end

  @spec filter(list, (any -> as_boolean(term))) :: list
  def filter(l, f) do
    _filter(l, f)
  end
  defp _filter([], _), do: []
  defp _filter([ head | tail ], f) do
    if f.(head) do
      [ head | _filter(tail, f) ]
    else
      _filter(tail, f)
    end
  end

  @type acc :: any
  @spec reduce(list, acc, ((any, acc) -> acc)) :: acc
  def reduce(l, acc, f) do
    _reduce(l, acc, f)
  end
  defp _reduce([], acc, _), do: acc
  defp _reduce([ head | tail ], acc, f) do
    next_acc = f.(head, acc)
    _reduce(tail, next_acc, f)
  end

  @spec append(list, list) :: list
  def append(a, b) do
    _append(a, b)
  end
  defp _append([], b), do: b
  defp _append([ head | tail ], b) do
    [ head | _append(tail, b) ]
  end

  @spec concat([[any]]) :: [any]
  def concat(ll) do
    _concat(ll)
  end
  defp _concat([]), do: []
  defp _concat([ [] | rest ]), do: _concat(rest)
  defp _concat([ [ head | tail ] | rest ]) do
    [ head | _concat([ tail | rest ]) ]
  end

end
