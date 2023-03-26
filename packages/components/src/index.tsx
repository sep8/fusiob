import React from 'react'
import trimString from '@fusion/utils'

export interface TestComponentProps {
  label: string
}

const TestComponent = (props: TestComponentProps): JSX.Element => {
  const name = trimString(props.label ?? 'Component Package')
  return <div className='components'>Hey {name}, say hello to monorepo.</div>
}

export default TestComponent
