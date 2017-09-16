import React from 'react'
import autobind from 'autobind-decorator'
import LoanEntryField from './LoanEntryField'
import RemoveLoan from '../buttons/RemoveLoanButton'

export default class LoanEntry extends React.Component {
  constructor (props) {
    super(props)
  }

  @autobind
  handleChange({ target: { id, name, value } }) {
    this.props.onFieldChange(id, name, value)
  }

  render() {
    const {id, title, amountOwed, interestRate, monthlyPayment} = this.props
    const titleFieldName = 'title'
    const titleFieldId = `${id}-${titleFieldName}`
    const titleFieldValue = title
    const amountOwedFieldName = 'amount-owed'
    const amountOwedFieldId = `${id}-${amountOwedFieldName}`
    const amountOwedFieldValue = amountOwed
    const interestRateFieldName = 'interest-rate'
    const interestRateFieldId = `${id}-${interestRateFieldName}`
    const interestRateFieldValue = interestRate
    const monthlyPaymentFieldName = 'monthly-payment'
    const monthlyPaymentFieldId = `${id}-${monthlyPaymentFieldName}`
    const monthlyPaymentFieldValue = monthlyPayment

    const removeLoan = e => console.log('remove loan')
    
    return (
      <div id={id}>
        <LoanEntryField
          field_id={titleFieldId}
          name={titleFieldName}
          value={titleFieldValue}
          label={'Title:'}
          on_change={this.handleChange} />
        <LoanEntryField
          field_id={amountOwedFieldId}
          name={amountOwedFieldName}
          value={amountOwedFieldValue}
          label={'Amount Owed:'}
          on_change={this.handleChange} />
        <LoanEntryField
          field_id={interestRateFieldId}
          name={interestRateFieldName}
          value={interestRateFieldValue}
          label={'Yearly Interest Rate (Decimal):'}
          on_change={this.handleChange} />
        <LoanEntryField
          field_id={monthlyPaymentFieldId}
          name={monthlyPaymentFieldName}
          value={monthlyPaymentFieldValue}
          label={'Monthly Payment:'}
          on_change={this.handleChange} />
        <div>
          <RemoveLoan onClick={removeLoan}/>
        </div>
      </div>
    )
  }
}

