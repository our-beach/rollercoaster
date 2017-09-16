import defaultDebt from '../debt/defaultDebt'
import defaultPaymentPlan from '../payment_plan/defaultPaymentPlan'

const emptyLoan = id => ({
  id: typeof id === 'undefined' ? null : id,
  debt: defaultDebt(),
  paymentPlan: defaultPaymentPlan()
})

export default emptyLoan
