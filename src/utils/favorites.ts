'use client'

import { isClient } from './is-client'

export function getFavorites(): string[] {
  if (!isClient) {
    return []
  }

  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export function updateFavorites(imdbId: string) {
  if (!isClient) {
    return
  }

  const favorites = getFavorites()
  const index = favorites.indexOf(imdbId)

  if (index === -1) {
    favorites.push(imdbId)
  } else {
    favorites.splice(index, 1)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}
