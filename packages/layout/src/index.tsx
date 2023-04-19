import React from 'react'
import TestComponent from '@fusion/components'
import trimString from '@fusion/utils'
import { InteractBox } from './components/interact-box'

const Layout = (props: { label: string }): JSX.Element => {
  const label = trimString(props.label ?? 'Layout package')

  return (
    <div className='layout-root'>
      <InteractBox>
        <TestComponent label={label}></TestComponent>
      </InteractBox>
    </div>
  )
}

export default Layout
