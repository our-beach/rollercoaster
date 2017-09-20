import React from 'react'

export default function LoanEntryField(props) {
  return <div {...props}><input onChange={props.onChange}></input></div>
}

LoanEntryField.displayName = 'LoanEntryField'
