import React from 'react'
import { render } from '@testing-library/react'
import App from '../src'
describe('App test', () => {
  it('renders correctly', () => {
    const { getByText } = render(<App label='foo' />)
    expect(getByText(/foo/)).toBeInTheDocument()
  })
})
