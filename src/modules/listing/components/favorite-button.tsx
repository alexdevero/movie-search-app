'use client'

import { useEffect, useState } from 'react'

import { FavoriteIcon } from '@/icons/favorite'
import { FavoriteFilledIcon } from '@/icons/favorite-filled'
import { getFavorites, updateFavorites } from '@/utils/favorites'

type Props = {
  imdbId: string
}

export const FavoriteButton = ({ imdbId }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const Icon = isFavorite ? (
    <FavoriteFilledIcon width={18} height={18} data-testid="favorite-button-icon" />
  ) : (
    <FavoriteIcon width={18} height={18} data-testid="favorite-button-icon" />
  )

  const handleFavoriteClick = () => {
    updateFavorites(imdbId)
    setIsFavorite(!isFavorite)
  }

  useEffect(() => {
    const favorites = getFavorites()
    setIsFavorite(favorites.includes(imdbId))
  }, [imdbId])

  return (
    <button
      className="flex cursor-pointer items-center justify-center rounded-md p-1 hover:bg-slate-200"
      data-testid="favorite-button"
      onClick={handleFavoriteClick}
    >
      {Icon}
    </button>
  )
}
