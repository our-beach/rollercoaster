import React from 'react'
import autobind from 'autobind-decorator'
import LoanEntries from './LoanEntries'
import AddLoan from './buttons/AddLoanButton'
import Calculate from './buttons/CalculateButton'
import emptyLoan from '../models/loan/emptyLoan'
import Calculation from './loan_calculate/Calculation'
import camelCase from 'lodash.camelcase'

@autobind
export default class LoanForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loans: [emptyLoan(0)],
      maxMonthsToPayOffLoan: 0
    }
  }

  createLoan() {
    const lastId = this.state.loans[this.state.loans.length - 1].id
    return emptyLoan(lastId + 1)
  }
  
  handleAddLoan() {
    const newLoans = this.state.loans.concat(
      this.createLoan()
    )

    this.setState({ loans: newLoans })
  }
  
  handleChange(id, name, value) {
    const newLoans = this.state.loans

    for (var i = 0; i < this.state.loans.length; i++) {
      if (this.state.loans[i]['id'] == parseInt(id)) {
        newLoans[i][camelCase(name)] = value
        newLoans[i].monthsToPayOffLoan = this.findLoanLength(newLoans[i])
      }
    }

    this.setState({ loans: newLoans })
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

  findLoanLength({amountOwed, interestRate, monthlyPayment}) {
    
    let tempAmountOwed = parseFloat(amountOwed)
    let interest = this.effectiveMonthlyInterest(tempAmountOwed, interestRate)
    let monthsToPayOffLoan = 0

    if (monthlyPayment <= interest && amountOwed > 0) {
      monthsToPayOffLoan = Infinity
    } else {
      while (tempAmountOwed > 0) {
        monthsToPayOffLoan += 1
        interest = this.effectiveMonthlyInterest(tempAmountOwed, interestRate)
        tempAmountOwed += interest - monthlyPayment
      }
    }

    return monthsToPayOffLoan
  }

  calculate() {
    const max = (x, y) => (x > y ? x : y)
    const maxMonthsToPayOffLoan = this.state.loans
      .map(loan => loan.monthsToPayOffLoan)
      .reduce(max)

    this.setState({ maxMonthsToPayOffLoan: maxMonthsToPayOffLoan })
  }
  
  render() {
    return (
      <div>
        <LoanEntries loans={this.state.loans} onFieldChange={this.handleChange}/>
        <div>
          <AddLoan onClick={this.handleAddLoan} />
          <Calculate onClick={this.calculate}/>
        </div>
        <Calculation total_months={this.state.maxMonthsToPayOffLoan} />
      </div>
    )
  }
}
