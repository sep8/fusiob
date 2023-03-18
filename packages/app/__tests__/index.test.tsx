import React from 'react'
import { render } from '@testing-library/react'
import App from '../src'
describe('App test', () => {
  it('renders correctly', () => {
    const { getByText } = render(<App name='foo' label='bar' />)
    expect(getByText(/foo/)).toBeInTheDocument()
  })
})
