import React from 'react'
import LoanEntry from './loan_entry/LoanEntry'

export default function LoanEntries({ loans }) {
  return (
    <div id='loan-entries'>
      { loans.map((loan, idx) => <LoanEntry key={idx} {...loan} />) }
    </div>
  )
}
