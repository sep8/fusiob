import React from 'react'
import TestComponent from '@fusion/components'
import trimString from '@fusion/utils'

const Layout = (props: { label: string }): JSX.Element => {
  const label = trimString(props.label ?? 'Layout package')

  return (
    <div className='layout-root'>
      <TestComponent label={label}></TestComponent>
    </div>
  )
}

export default Layout
