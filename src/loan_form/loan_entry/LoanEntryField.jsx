import React from 'react'

export default function LoanEntryField({ field_id, name, value, label }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        id={field_id}
        name={name}
        value={value} />
    </div>
  )
}
