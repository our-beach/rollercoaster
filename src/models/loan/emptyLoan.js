import defaultDebt from '../debt/defaultDebt'
import defaultPaymentPlan from '../payment_plan/defaultPaymentPlan'

const emptyLoan = id => ({
  debt: defaultDebt(),
  paymentPlan: defaultPaymentPlan()
})

export default emptyLoan
