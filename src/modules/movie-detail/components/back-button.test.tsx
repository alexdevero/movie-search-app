import { render } from '@testing-library/react'

import { BackButton } from './back-button'

describe('BackButton', () => {
  it('should render', () => {
    const { getByTestId } = render(<BackButton />)

    expect(getByTestId('back-button')).toBeInTheDocument()
  })

  it('should render a back button icon', () => {
    const { getByTestId } = render(<BackButton />)

    expect(getByTestId('back-button-icon')).toBeInTheDocument()
  })

  it('should render a back button link with the correct href', () => {
    const { getByTestId } = render(<BackButton />)

    expect(getByTestId('back-button')).toHaveAttribute('href', '/')
  })

  it('should render a back button link with the correct href when query is present', () => {
    const { getByTestId } = render(<BackButton query="batman" />)

    expect(getByTestId('back-button')).toHaveAttribute('href', '/?s=batman&page=1')
  })

  it('should render a back button link with the correct href when page is present', () => {
    const { getByTestId } = render(<BackButton page="2" />)

    expect(getByTestId('back-button')).toHaveAttribute('href', '/')
  })

  it('should render a back button link with the correct href when query and page are present', () => {
    const { getByTestId } = render(<BackButton query="batman" page="2" />)

    expect(getByTestId('back-button')).toHaveAttribute('href', '/?s=batman&page=2')
  })
})
