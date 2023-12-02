import { fireEvent, render } from '@testing-library/react'

import { Pagination } from './pagination'

describe('Pagination', () => {
  it('should render the pagination', () => {
    const { getByTestId } = render(
      <Pagination searchQuery="batman" currentPage={1} hasNextPage={true} />,
    )
    const pagination = getByTestId('pagination')
    expect(pagination).toBeInTheDocument()
  })

  it('should render the previous button', () => {
    const { getByTestId } = render(
      <Pagination searchQuery="batman" currentPage={2} hasNextPage={true} />,
    )
    const pagination = getByTestId('pagination')
    const previousButton = getByTestId('pagination-previous')
    expect(pagination).toContainElement(previousButton)
  })

  it('should render the next button', () => {
    const { getByTestId } = render(
      <Pagination searchQuery="batman" currentPage={1} hasNextPage={true} />,
    )
    const pagination = getByTestId('pagination')
    const nextButton = getByTestId('pagination-next')
    expect(pagination).toContainElement(nextButton)
  })

  it('should not render the previous button if on the first page', () => {
    const { queryByTestId } = render(
      <Pagination searchQuery="batman" currentPage={1} hasNextPage={true} />,
    )
    const previousButton = queryByTestId('pagination-previous')
    expect(previousButton).not.toBeInTheDocument()
  })

  it('should not render the next button if on the last page', () => {
    const { queryByTestId } = render(
      <Pagination searchQuery="batman" currentPage={100} hasNextPage={false} />,
    )
    const nextButton = queryByTestId('pagination-next')
    expect(nextButton).not.toBeInTheDocument()
  })

  it('should change the page when the previous button is clicked', () => {
    const { getByTestId } = render(
      <Pagination searchQuery="batman" currentPage={2} hasNextPage={true} />,
    )
    const previousButton = getByTestId('pagination-previous')

    fireEvent.click(previousButton)

    expect(previousButton).toHaveAttribute('href', '?s=batman&page=1')
  })

  it('should change the page when the next button is clicked', () => {
    const { getByTestId } = render(
      <Pagination searchQuery="batman" currentPage={2} hasNextPage={true} />,
    )
    const nextButton = getByTestId('pagination-next')

    fireEvent.click(nextButton)

    expect(nextButton).toHaveAttribute('href', '?s=batman&page=3')
  })
})
