import { fireEvent, render } from '@testing-library/react'

import { PosterPreview } from './poster-preview'

describe('PosterPreview', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <PosterPreview posterUrl="https://via.placeholder.com/300x400" title="Batman" />,
    )

    expect(getByTestId('poster-preview')).toBeInTheDocument()
  })

  it('should render the poster preview image', () => {
    const { getByTestId } = render(
      <PosterPreview posterUrl="https://via.placeholder.com/300x400" title="Batman" />,
    )

    expect(getByTestId('poster-preview-image')).toBeInTheDocument()
  })

  it('should render the poster preview image with the correct alt', () => {
    const { getByTestId } = render(
      <PosterPreview posterUrl="https://via.placeholder.com/300x400" title="Batman" />,
    )

    expect(getByTestId('poster-preview-image')).toHaveAttribute('alt', 'Batman')
  })
})
