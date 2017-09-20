import React from 'react'
import LoanEntryField from './LoanEntryField'
import Enum from './enum'

const { LOAN_ENTRY_COPY: { MONTHLY_PAYMENT: { label, placeholder } } } = Enum

export default function MonthlyPayment({ amount, onChange }) {
  return (
    <LoanEntryField
      fieldClass='monthly-payment'
      name='monthly-payment'
      initial={placeholder}
      value={amount}
      label={label}
      onChange={value => onChange('monthly-payment', value)} />
  )
}
