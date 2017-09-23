import React from 'react'
import LoanEntry from './loan_entry/LoanEntry'

export default function LoanEntries({ loans, onFieldChange, onRemove }) {
  return (
      <div id='loan-entries'>
        { loans.map((loan, idx) =>
                    <LoanEntry
                        key={idx}
                        onFieldChange={onFieldChange}
                        {...loan}
                        onRemove={onRemove} />
                   ) }
      </div>
    )
}
