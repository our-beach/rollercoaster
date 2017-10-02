function daysInYear(year) {
  return 365
}

function daysInMonth(month) {
  return 30.417
}

function effectiveMonthlyInterestRate(yearlyInterestRate, month, year) {
  return ((1 + yearlyInterestRate / daysInYear(year)) ** daysInMonth(month)) - 1
}

const calculateRepaymentTerm = ({debt:{amountOwed, interestRate: {rate}}, paymentPlan: {monthlyPayment}}) => {
  if (amountOwed == 0 ) {
    return 0
  } else if (rate) {
    const interestRate = effectiveMonthlyInterestRate(rate)
    if (monthlyPayment <= amountOwed * interestRate && amountOwed > 0) {
      return Infinity
    } else {
      return Math.ceil(
        (Math.log(monthlyPayment)
          - Math.log(monthlyPayment - amountOwed * interestRate)
        ) / Math.log(1 + interestRate)
      )
    }
  } else {
    return Math.ceil(amountOwed / monthlyPayment)
  }
}

const calculateMonthlyPayment = ({debt:{amountOwed, interestRate: {rate}}, paymentPlan: {repaymentTerm}}) => {
  if (amountOwed == 0) {
    return 0
  } else if (rate) {
    const interestRate = effectiveMonthlyInterestRate(rate)
    return amountOwed * (interestRate / (1 - (1 + interestRate) ** -repaymentTerm))
  } else {
    return amountOwed / repaymentTerm
  }
}

export { calculateRepaymentTerm, calculateMonthlyPayment }