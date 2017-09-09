import React from 'react'

export default function LoanEntryField({ field_id, name, value, label, on_change }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        id={field_id}
        name={name}
        placeholder={value}
        onChange={on_change} />
    </div>
  )
}
