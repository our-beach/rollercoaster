import React from 'react'
import autobind from 'autobind-decorator'
import AmountOwed from './AmountOwed'
import InterestRate from './InterestRate'
import MonthlyPayment from './MonthlyPayment'
import Title from './Title'
import RemoveLoan from '../buttons/RemoveLoanButton'

export default class LoanEntry extends React.Component {
  constructor (props) {
    super(props)
  }

  @autobind
  handleChange(name, value) {
    this.props.onFieldChange(this.props.id, name, value)
  }

  @autobind
  handleRemove() {
    this.props.onRemove(this.props.id)
  }

  render() {
    const {
      id,
      debt: {
        title,
        amountOwed,
        interestRate: {
          rate
        }
      },
      paymentPlan: { monthlyPayment },
      removeLoan,
    } = this.props

    return (
      <div id={id}>
        <Title title={title} onChange={this.handleChange} />
        <AmountOwed amount={amountOwed} onChange={this.handleChange} />
        <InterestRate amount={rate} onChange={this.handleChange} />
        <MonthlyPayment amount={monthlyPayment} onChange={this.handleChange}/>
        <div>
          <RemoveLoan onClick={this.handleRemove}/>
        </div>
      </div>
    )
  }
}
