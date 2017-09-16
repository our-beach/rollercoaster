import React from 'react'

export default function Calculation({ total_months }) {
  return (
    <div>
      <p>It will take {total_months === Infinity ? 'literally forever' : `${total_months} month${total_months === 1 ? '' : 's'}` } to pay off your loans.</p>
    </div>
  )
}