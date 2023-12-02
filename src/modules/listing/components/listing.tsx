import Link from 'next/link'

import { SearchResult } from '@/types/omdb-api'

import { FavoriteButton } from './favorite-button'

type Props = {
  movies?: SearchResult[]
  searchQuery?: string
  currentPage?: number
}

export const Listing = ({ movies, searchQuery, currentPage }: Props) => {
  return (
    <div className="flex flex-1 items-start overflow-y-auto" data-testid="listing">
      {searchQuery && (
        <table className="w-full max-w-full" data-testid="listing-table">
          <thead className="bg-gray-800 text-white" data-testid="listing-table-header">
            <tr className="text-left text-sm font-bold">
              <th className="h-7 px-4 py-3 text-sm font-semibold uppercase">Name</th>
              <th className="h-7 px-4 py-3 text-sm font-semibold uppercase">Year</th>
              <th className="h-7 px-4 py-3 text-sm font-semibold uppercase">Type</th>
              <th className="h-7 px-4 py-3 text-sm font-semibold uppercase" />
            </tr>
          </thead>
          <tbody data-testid="listing-table-body" className="h-auto">
            {movies?.length ? (
              movies.map((movie, i) => (
                <tr
                  key={movie.imdbID}
                  className={`text-sm font-normal ${
                    i % 2 ? 'text-gray-700' : 'bg-gray-100'
                  }`}
                  data-testid="listing-table-body-row"
                >
                  <td className="h-7 px-4 py-3 text-left">
                    <Link
                      href={`/movie/${movie.imdbID}?s=${searchQuery}&page=${currentPage}`}
                      className="cursor-pointer font-semibold text-gray-950 hover:text-blue-500"
                    >
                      {movie.Title}
                    </Link>
                  </td>
                  <td className="h-7 px-4 py-3 text-left">{movie.Year}</td>
                  <td className="h-7 px-4 py-3 text-left">{movie.Type}</td>
                  <td className="h-7 px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <FavoriteButton imdbId={movie.imdbID} />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg-gray-100 text-sm font-normal text-gray-700">
                <td className="h-7 px-4 py-3 text-center" colSpan={4}>
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  )
}
