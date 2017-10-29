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
import { emptyLoan, calculateRepaymentTerm } from '../models/loan'
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
             loan => R.set(loanRepaymentTerm, calculateRepaymentTerm(loan), loan))
    ]

    const newLedger = R.reduce(R.flip(R.call), this.state.ledger, steps)
    this.setState({ ledger: newLedger })
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
