import { fireEvent, render } from '@testing-library/react'

import { FavoriteButton } from './favorite-button'

describe('FavoriteButton', () => {
  it('should render the button', () => {
    const { getByTestId } = render(<FavoriteButton imdbId="tt123" />)
    const button = getByTestId('favorite-button')
    expect(button).toBeInTheDocument()
  })

  it('should change the button icon when clicked', () => {
    const { getByTestId } = render(<FavoriteButton imdbId="tt123" />)
    const button = getByTestId('favorite-button')
    const initialIcon = button.querySelector('svg')

    fireEvent.click(button)

    const updatedIcon = button.querySelector('svg')
    expect(updatedIcon).not.toBe(initialIcon)
  })
})
