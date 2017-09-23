import R from 'ramda'
import { database, currentId } from './lenses'

const newDatabaseEntry = (ledger, loan) => ({
  [R.view(currentId, ledger)]: loan
})

const addNewDatabaseEntry = R.compose(R.merge, newDatabaseEntry)

const mergeNewLoan = (ledger, loan) => R.over(
  database,
  addNewDatabaseEntry(ledger, loan),
  ledger
)

const incrementId = R.over(currentId, R.add(1))

const addLoan = R.converge(
  R.mergeDeepRight,
  [mergeNewLoan, incrementId]
)

export default addLoan
