import { fireEvent, render } from '@testing-library/react'

import { Search } from './search'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => '/listing',
}))

describe('Search', () => {
  it('should render the search', () => {
    const { getByTestId } = render(<Search searchQuery="batman" />)
    const search = getByTestId('search-wrapper')
    expect(search).toBeInTheDocument()
  })

  it('should change the search query when the input is changed', () => {
    const { getByTestId } = render(<Search searchQuery="batman" />)
    const searchInput = getByTestId('search-input')

    fireEvent.change(searchInput, { target: { value: 'superman' } })

    expect(searchInput).toHaveValue('superman')
  })
})
