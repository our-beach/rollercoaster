import React from 'react'
import autobind from 'autobind-decorator'
import LoanEntries from './LoanEntries'
import AddLoan from './buttons/AddLoanButton'
import Calculate from './buttons/CalculateButton'
import emptyLoan from '../models/loan/emptyLoan'

const calculate = e => console.log('calculate')

export default class LoanForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loans: [emptyLoan(0)]
    }
  }

  createLoan() {
    const lastId = this.state.loans[this.state.loans.length - 1].id
    return emptyLoan(lastId + 1)
  }

  @autobind
  handleAddLoan() {
    const newLoans = this.state.loans.concat(
      this.createLoan()
    )

    this.setState({ loans: newLoans })
  }
  
  render() {
    return (
      <div>
        <LoanEntries loans={this.state.loans} />
        <div>
          <AddLoan onClick={this.handleAddLoan} />
          <Calculate onClick={calculate}/>
        </div>
      </div>
    )
  }
}
