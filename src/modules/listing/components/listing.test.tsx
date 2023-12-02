import { render } from '@testing-library/react'

import { Listing } from './listing'

const dummyMovies = [
  {
    Title: 'Batman',
    Year: '1989',
    imdbID: 'tt0096895',
    Type: 'movie',
    Poster: 'N/A',
  },
]

describe('Listing', () => {
  it('should render', () => {
    const { getByTestId } = render(<Listing movies={dummyMovies} />)

    expect(getByTestId('listing')).toBeInTheDocument()
  })

  it('should render a listing table', () => {
    const { getByTestId } = render(
      <Listing movies={dummyMovies} searchQuery="batman" />,
    )

    expect(getByTestId('listing-table')).toBeInTheDocument()
  })

  it('should render a listing table header', () => {
    const { getByTestId } = render(
      <Listing movies={dummyMovies} searchQuery="batman" />,
    )

    expect(getByTestId('listing-table-header')).toBeInTheDocument()
  })

  it('should render a listing table body', () => {
    const { getByTestId } = render(
      <Listing movies={dummyMovies} searchQuery="batman" />,
    )

    expect(getByTestId('listing-table-body')).toBeInTheDocument()
  })

  it('should render a listing table body row', () => {
    const { getByTestId } = render(
      <Listing movies={dummyMovies} searchQuery="batman" />,
    )

    expect(getByTestId('listing-table-body-row')).toBeInTheDocument()
  })

  it('should render a favorite button', () => {
    const { getByTestId } = render(
      <Listing movies={dummyMovies} searchQuery="batman" />,
    )

    expect(getByTestId('favorite-button')).toBeInTheDocument()
  })

  it('should render a favorite button icon', () => {
    const { getByTestId } = render(
      <Listing movies={dummyMovies} searchQuery="batman" />,
    )

    expect(getByTestId('favorite-button-icon')).toBeInTheDocument()
  })
})
