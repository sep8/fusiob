import React from 'react'
import { render } from '@testing-library/react'
import Layout from '../src'
describe('Layout test', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Layout label='foo' />)
    expect(getByText(/foo/)).toBeInTheDocument()
  })
})
