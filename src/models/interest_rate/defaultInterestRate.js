import FREQUENCY from '../frequency/frequencyEnum'

const defaultInterestRate = () => ({
  rate: 0,
  nominalFrequency: FREQUENCY.YEARLY,
  compoundingFrequency: FREQUENCY.DAILY
})

export default defaultInterestRate