import { Movie } from '@/types/omdb-api'
import { formatRuntime } from '@/utils/format-runtime'

type Props = {
  movie: Movie
}

export const MovieInfo = ({ movie }: Props) => {
  return (
    <div className="mx-auto px-4 pb-16 sm:px-6 md:mx-0" data-testid="movie-info">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {movie.Title}
        </h1>
      </div>

      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <p
          className="mt-1 text-sm tracking-tight text-gray-900"
          data-testid="movie-info-meta"
        >
          <span>{movie.Country}</span> &middot; <span>{movie.Year}</span> &middot;{' '}
          <span>{formatRuntime(movie.Runtime)}</span> &middot;{' '}
          <span>{movie.Rated}</span>
        </p>
        {movie.Genre && (
          <p className="mt-2 text-sm tracking-tight text-gray-900">{movie.Genre}</p>
        )}

        {movie.Ratings?.length > 0 && (
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <ul
              role="list"
              className="list-none space-y-2 pl-0 text-sm"
              data-testid="movie-info-ratings"
            >
              {movie.Ratings.map((r) => (
                <li key={r.Source} className="text-gray-400">
                  <p className="sr-only">{r.Source}</p>
                  <span className="text-sm font-semibold text-gray-900">
                    {r.Source}:
                  </span>{' '}
                  <span className="text-sm text-gray-900">{r.Value}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="py-5 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        <div className="mb-4">
          <h3 className="sr-only">Info</h3>
          <ul
            role="list"
            className="list-none space-y-3 pl-0 text-sm"
            data-testid="movie-info-cast"
          >
            {movie.Director && (
              <li className="text-gray-400">
                <span className="text-sm font-semibold text-gray-900">Director:</span>{' '}
                <span className="text-sm text-gray-900">{movie.Director}</span>
              </li>
            )}
            {movie.Writer && (
              <li className="text-gray-400">
                <span className="text-sm font-semibold text-gray-900">Writer:</span>{' '}
                <span className="text-sm text-gray-900">{movie.Writer}</span>
              </li>
            )}
            {movie.Actors && (
              <li className="text-gray-400">
                <span className="text-sm font-semibold text-gray-900">Actors:</span>{' '}
                <span className="text-sm text-gray-900">{movie.Actors}</span>
              </li>
            )}
          </ul>
        </div>

        {movie.Plot && (
          <div data-testid="movie-info-Description">
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{movie.Plot}</p>
            </div>
          </div>
        )}

        {movie.Awards && (
          <div className="mt-5 flex gap-1">
            <span className="text-md font-semibold text-gray-900">Awards:</span>
            <span className="text-md text-gray-900">{movie.Awards}</span>
          </div>
        )}
      </div>
    </div>
  )
}
