import React from 'react'
import autobind from 'autobind-decorator'
import LoanEntries from './LoanEntries'
import AddLoan from './buttons/AddLoanButton'
import Calculate from './buttons/CalculateButton'
import emptyLoan from '../models/loan/emptyLoan'
import FREQUENCY from '../models/frequency/frequencyEnum'
import Calculation from './loan_calculate/Calculation'
import camelCase from 'lodash.camelcase'

@autobind
export default class LoanForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loans: [emptyLoan(0)],
      maximumRepaymentTerm: 0
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
        switch(name) {
          case 'title':
            newLoans[i]['debt'][camelCase(name)] = value
            break
          case 'amount-owed':
            newLoans[i]['debt'][camelCase(name)] = value
            break
          case 'rate':
            newLoans[i]['debt']['interestRate'][camelCase(name)] = value
            break
          case 'monthly-payment':
            newLoans[i]['paymentPlan'][camelCase(name)] = value
            break
        }
        newLoans[i].paymentPlan.repaymentTerm = this.calculateRepaymentTerm(newLoans[i])
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
    const max = (x, y) => (x > y ? x : y)
    const maximumRepaymentTerm = this.state.loans
      .map(loan => loan.paymentPlan.repaymentTerm)
      .reduce(max)

    this.setState({ maximumRepaymentTerm: maximumRepaymentTerm })
  }
  
  render() {
    return (
      <div>
        <LoanEntries loans={this.state.loans} onFieldChange={this.handleChange}/>
        <div>
          <AddLoan onClick={this.handleAddLoan} />
          <Calculate onClick={this.calculate}/>
        </div>
        <Calculation total_months={this.state.maximumRepaymentTerm} />
      </div>
    )
  }
}
