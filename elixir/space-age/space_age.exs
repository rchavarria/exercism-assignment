defmodule SpaceAge do
  @type planet :: :mercury | :venus | :earth | :mars | :jupiter
                | :saturn | :neptune | :uranus

  @seconds_in_a_day 60 * 60 * 24

  @days_in_a_year [
    mercury: 87.9691,
    venus: 224.701,
    earth: 365.25,
    mars: 686.971,
    jupiter: 4_332.59,
    saturn: 10_759.22,
    neptune: 60_182,
    uranus: 30_688.5
  ]

  @doc """
  Return the number of years a person that has lived for 'seconds' seconds is
  aged on 'planet'.
  """
  @spec age_on(planet, pos_integer) :: float
  def age_on(planet, seconds),
  do: seconds / @seconds_in_a_day / @days_in_a_year[planet]
end
