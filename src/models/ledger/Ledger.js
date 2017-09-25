import R from 'ramda'
import addLoan from './addLoan'

const Ledger = () => ({
  currentId: 0,
  database: {},
})

const withLoans = R.reduce(addLoan, Ledger())

const Constructors = {
  empty: Ledger,
  withLoans,
}

export default Constructors
