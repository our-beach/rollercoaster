import interestRate from './interestRate'
import FREQUENCY from '../frequency/frequencyEnum'

export default function defaultInterestRate() {
  return interestRate(0, FREQUENCY.YEARLY)
}