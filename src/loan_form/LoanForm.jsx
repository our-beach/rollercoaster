import React from 'react'
import LoanEntries from './LoanEntries'
import AddLoan from './buttons/AddLoanButton'
import Calculate from './buttons/CalculateButton'

const loans = [
  { id: 0, amountOwed: 100, interestRate: 0.5, monthlyPayment: 10 },
  { id: 1, amountOwed: 200, interestRate: 0.5, monthlyPayment: 10 },
  { id: 2, amountOwed: 300, interestRate: 0.5, monthlyPayment: 10 },
]

const addLoan = e => console.log('add loan')
const calculate = e => console.log('calculate')

export default function LoanForm() {
  return (
    <div>
      <LoanEntries loans={loans}/>
      <div>
        <AddLoan onClick={addLoan}/>
        <Calculate onClick={calculate}/>
      </div>
    </div>
  )
}
