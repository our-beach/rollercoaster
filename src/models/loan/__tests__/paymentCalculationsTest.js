import { calculateRepaymentTerm, calculateMonthlyPayment } from '../paymentCalculations'
import defaultDebt from '../../debt/defaultDebt'
import defaultPaymentPlan from '../../payment_plan/defaultPaymentPlan'
import emptyLoan from '../emptyLoan'

jest.disableAutomock()

var loans = Array.apply(null, Array(6)).map(() => emptyLoan())

loans[0].debt.amountOwed = 0
loans[0].debt.interestRate.rate = 10000
loans[0].paymentPlan.monthlyPayment = 0
loans[0].paymentPlan.repaymentTerm = 0

loans[1].debt.amountOwed = 100
loans[1].debt.interestRate.rate = 0
loans[1].paymentPlan.monthlyPayment = 10
loans[1].paymentPlan.repaymentTerm = 10

loans[2].debt.amountOwed = 100
loans[2].debt.interestRate.rate = .001
loans[2].paymentPlan.monthlyPayment = 10
loans[2].paymentPlan.repaymentTerm = 11

loans[3].debt.amountOwed = 1000
loans[3].debt.interestRate.rate = .05
loans[3].paymentPlan.monthlyPayment = 80
loans[3].paymentPlan.repaymentTerm = 13

loans[4].debt.amountOwed = 100
loans[4].debt.interestRate.rate = 1
loans[4].paymentPlan.monthlyPayment = 8.67
loans[4].paymentPlan.repaymentTerm = Infinity

loans[5].debt.amountOwed = 100
loans[5].debt.interestRate.rate = 1
loans[5].paymentPlan.monthlyPayment = 8.68
loans[5].paymentPlan.repaymentTerm = 102

describe('#calculateRepaymentTerm', () => {

  it('should calculate an infinite repayment term when the amount owed is more than 0 and the monthly interest is greater than the monthly repayment', () => {
    expect(calculateRepaymentTerm(loans[4])).toEqual(Infinity)
  })

  it('should just divide the amount owed by the monthly payment if there\'s no interest rate', () => {
    expect(calculateRepaymentTerm(loans[1])).toEqual(10)
  })

  it('should return an accurate estimate of the number of months required to pay otherwise', () => {
    expect(calculateRepaymentTerm(loans[0])).toEqual(0)
    expect(calculateRepaymentTerm(loans[2])).toEqual(11)
    expect(calculateRepaymentTerm(loans[3])).toBeGreaterThan(10)
    expect(calculateRepaymentTerm(loans[3])).toBeLessThan(15)
    expect(calculateRepaymentTerm(loans[5])).toBeGreaterThan(100)
    expect(calculateRepaymentTerm(loans[5])).toBeLessThan(105)
  })
})

describe('#calculateMonthlyPayment', () => {

  it('should just divide the amount owed by the monthly payment if there\'s no interest rate', () => {
    expect(calculateMonthlyPayment(loans[1])).toEqual(10)
  })

  it('should return an accurate estimate of the number of months required to pay otherwise', () => {
    expect(calculateMonthlyPayment(loans[0])).toEqual(0)
    expect(calculateMonthlyPayment(loans[2])).toBeGreaterThan(9)
    expect(calculateMonthlyPayment(loans[2])).toBeLessThan(11)
    expect(calculateMonthlyPayment(loans[3])).toBeGreaterThan(70)
    expect(calculateMonthlyPayment(loans[3])).toBeLessThan(90)
    expect(calculateMonthlyPayment(loans[5])).toBeGreaterThan(8.6)
    expect(calculateMonthlyPayment(loans[5])).toBeLessThan(8.68)
  })
})
