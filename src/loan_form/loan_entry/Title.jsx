import React from 'react'
import LoanEntryField from './LoanEntryField'
import Enum from './enum'

const { LOAN_ENTRY_COPY: { TITLE: { label, placeholder } } } = Enum

export default function Title({ title, onChange}) {
  return (
    <LoanEntryField
      fieldClass={'title'}
      name={'title'}
      initial={placeholder}
      value={title}
      label={label}
      onChange={value => onChange('title', value)}
    />
  )
}
