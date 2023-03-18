import React from 'react'
import TestComponent from '@sep9/components'
import trimString from '@sep9/utils'

const App = (props: { label: string }): JSX.Element => {
  const label = trimString(props.label ?? 'Label')

  return (
    <div className='app-root'>
      <h2>{label}</h2>
      <TestComponent label='Components package'></TestComponent>
    </div>
  )
}

export default App
