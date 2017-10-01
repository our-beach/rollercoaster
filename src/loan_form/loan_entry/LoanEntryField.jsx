import React from 'react'

export default function LoanEntryField({ fieldClass, name, value, label, initial, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        className={`loan-entry-${fieldClass}`}
        name={name}
        placeholder={initial}
        value={value}
        onChange={({ target: { value } }) => onChange(value)} />
    </div>
  )
}
