defmodule LinkedList do
  @opaque t :: tuple()

  def new() do
    {}
  end

  def push(list, elem) do
    { elem, list }
  end

  def length({}), do: 0
  def length({ elem, tail }) do
    1 + LinkedList.length(tail)
  end

  def empty?({}), do: true
  def empty?(_list), do: false

  def peek({}), do: { :error, :empty_list }
  def peek({ elem, next }) do
    { :ok, elem }
  end

  def tail({}), do: { :error, :empty_list }
  def tail({ _elem, next }) do
    { :ok, next }
  end

  @doc """
  Remove the head from a LinkedList
  """
  @spec pop(t) :: {:ok, any(), t} | {:error, :empty_list}
  def pop(list) do
    # Your implementation here...
  end

  @doc """
  Construct a LinkedList from a stdlib List
  """
  @spec from_list(list()) :: t
  def from_list(list) do
    # Your implementation here...
  end

  @doc """
  Construct a stdlib List LinkedList from a LinkedList
  """
  @spec to_list(t) :: list()
  def to_list(list) do
    # Your implementation here...
  end

  @doc """
  Reverse a LinkedList
  """
  @spec reverse(t) :: t
  def reverse(list) do
    # Your implementation here...
  end
end
