import React from 'react'
import LoanEntryField from './LoanEntryField'
import Enum from './enum'

const { LOAN_ENTRY_COPY: { AMOUNT_OWED: { label, placeholder } } } = Enum

export default function AmountOwed({ amount, onChange }) {
  return (
    <LoanEntryField
      fieldClass='amount-owed'
      name='amount-owed'
      label={label}
      value={amount}
      initial={placeholder}
      onChange={value => onChange('amount-owed', value)}
      />
  )
}
