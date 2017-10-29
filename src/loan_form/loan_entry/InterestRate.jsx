import React from 'react'
import LoanEntryField from './LoanEntryField'
import Enum from './enum'

const { LOAN_ENTRY_COPY: { INTEREST_RATE: { label, placeholder } } } = Enum

export default function InterestRate({ amount, onChange }) {
  return (
    <LoanEntryField
      fieldClass='interest-rate'
      name='interest-rate'
      label={label}
      value={amount}
      initial={placeholder}
      onChange={value => onChange('interest-rate', value)}
      />
  )
}
