import React from 'react'
import Layout from '@fusion/layout'
import TestComponent from '@fusion/components'
import trimString from '@fusion/utils'

const App = (props: { label: string }): JSX.Element => {
  const label = trimString(props.label ?? 'App package')

  return (
    <div className='app-root'>
      <TestComponent label={label}></TestComponent>
      <Layout label='Layout package'></Layout>
    </div>
  )
}

export default App