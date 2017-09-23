import React from 'react'
import autobind from 'autobind-decorator'
import camelCase from 'lodash.camelcase'
import R from 'ramda'

import LoanEntries from './LoanEntries'
import AddLoan from './buttons/AddLoanButton'
import Calculate from './buttons/CalculateButton'
import Calculation from './loan_calculate/Calculation'

import Ledger, {
  addLoan,
  removeLoanAt,
  repaymentTerm,
  loansIn,
} from '../models/ledger'
import { loanAt } from '../models/ledger/lenses'
import { loanProp, repaymentTerm as loanRepaymentTerm } from '../models/loan/lenses'
import emptyLoan from '../models/loan/emptyLoan'
import FREQUENCY from '../models/frequency/frequencyEnum'


@autobind
export default class LoanForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ledger: Ledger.withLoans([emptyLoan()]),
      maximumRepaymentTerm: 0
    }
  }

  handleAddLoan() {
    this.setState({ ledger: addLoan(this.state.ledger, emptyLoan()) })
  }

  handleRemove(id) {
    this.setState({ ledger: removeLoanAt(id, this.state.ledger) })
  }

  handleChange(id, name, value) {
    const changedLoanProperty = R.compose(loanAt(id), loanProp(camelCase(name)))
    const steps = [
      R.set(changedLoanProperty, value),
      R.over(loanAt(parseInt(id)),
             loan => R.set(loanRepaymentTerm, this.calculateRepaymentTerm(loan), loan))
    ]

    const newLedger = R.reduce(R.flip(R.call), this.state.ledger, steps)
    this.setState({ ledger: newLedger })
  }

  daysInYear(year) {
    return 365
  }

  daysInMonth(month) {
    return 30.417
  }

  effectiveMonthlyInterest(amountOwed, yearlyInterestRate, month, year) {
    return amountOwed * (((1 + yearlyInterestRate / this.daysInYear(year)) ** this.daysInMonth(month)) - 1)
  }

  calculateRepaymentTerm({debt:{amountOwed, interestRate: {rate}}, paymentPlan: {monthlyPayment}}) {
    let tempAmountOwed = parseFloat(amountOwed)
    let interest = this.effectiveMonthlyInterest(tempAmountOwed, rate)
    let repaymentTerm = 0

    if (monthlyPayment <= interest && amountOwed > 0) {
      repaymentTerm = Infinity
    } else {
      while (tempAmountOwed > 0) {
        repaymentTerm += 1
        interest = this.effectiveMonthlyInterest(tempAmountOwed, rate)
        tempAmountOwed += interest - monthlyPayment
      }
    }

    return repaymentTerm
  }

  calculate() {
    this.setState({
      maximumRepaymentTerm: repaymentTerm(this.state.ledger)
    })
  }

  render() {
    return (
      <div>
        <LoanEntries
          loans={loansIn(this.state.ledger)}
          onFieldChange={this.handleChange}
          onRemove={this.handleRemove} />
        <div>
          <AddLoan onClick={this.handleAddLoan} />
          <Calculate onClick={this.calculate}/>
        </div>
        <Calculation total_months={this.state.maximumRepaymentTerm} />
      </div>
    )
  }
}
