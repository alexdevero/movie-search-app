import { redirect } from 'next/navigation'

import { PageProps } from '@/types/next'
import { MovieResponse } from '@/types/omdb-api'

import { BackButton } from './components/back-button'
import { MovieInfo } from './components/movie-info'
import { PosterPreview } from './components/poster-preview'

const apiURL = process.env.NEXT_PUBLIC_API_URL

const getMovieData = async (movieId: string) => {
  try {
    const res = await fetch(`${apiURL}/movie?id=${movieId}`)

    const data = await res.json()

    return data as MovieResponse
  } catch (error) {
    console.error(error)

    return redirect('/')
  }
}

type Props = PageProps<
  {
    movieId: string
  },
  {
    s?: string
    page?: string
  }
>

export async function MovieDetailPage({ params, searchParams }: Props) {
  const movieData = (await getMovieData(params.movieId)) ?? {}

  return (
    <div>
      <BackButton query={searchParams.s} page={searchParams.page} />
      <div className="grid max-w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr]">
        {movieData?.Poster && (
          <PosterPreview posterUrl={movieData?.Poster} title={movieData?.Title} />
        )}
        {movieData && <MovieInfo movie={movieData} />}
      </div>
    </div>
  )
}
