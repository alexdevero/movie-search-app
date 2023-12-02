import { fireEvent, render } from '@testing-library/react'

import { formatRuntime } from '@/utils/format-runtime'

import { MovieInfo } from './movie-info'

const movie = {
  Title: 'Iron Man',
  Year: '2008',
  Rated: 'PG-13',
  Released: '02 May 2008',
  Runtime: '126 min',
  Genre: 'Action, Adventure, Sci-Fi',
  Director: 'Jon Favreau',
  Writer: 'Mark Fergus, Hawk Ostby, Art Marcum',
  Actors: 'Robert Downey Jr., Gwyneth Paltrow, Terrence Howard',
  Plot: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
  Language: 'English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian',
  Country: 'United States, Canada',
  Awards: 'Nominated for 2 Oscars. 22 wins & 73 nominations total',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '7.9/10' },
    { Source: 'Rotten Tomatoes', Value: '94%' },
    { Source: 'Metacritic', Value: '79/100' },
  ],
  Metascore: '79',
  imdbRating: '7.9',
  imdbVotes: '1,102,172',
  imdbID: 'tt0371746',
  Type: 'movie',
  DVD: '01 Mar 2013',
  BoxOffice: '$319,034,126',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
}

describe('MovieInfo', () => {
  it('should render', () => {
    const { getByTestId } = render(<MovieInfo movie={movie} />)

    expect(getByTestId('movie-info')).toBeInTheDocument()
  })

  it('should render the movie title', () => {
    const { getByText } = render(<MovieInfo movie={movie} />)

    expect(getByText(movie.Title)).toBeInTheDocument()
  })

  it('should render the movie country', () => {
    const { getByText } = render(<MovieInfo movie={movie} />)

    expect(getByText(movie.Country)).toBeInTheDocument()
  })

  it('should render the movie year', () => {
    const { getByText } = render(<MovieInfo movie={movie} />)

    expect(getByText(movie.Year)).toBeInTheDocument()
  })

  it('should render the movie runtime', () => {
    const { getByText } = render(<MovieInfo movie={movie} />)

    expect(getByText(formatRuntime(movie.Runtime))).toBeInTheDocument()
  })

  it('should render the movie genre', () => {
    const { getByText } = render(<MovieInfo movie={movie} />)

    expect(getByText(movie.Genre)).toBeInTheDocument()
  })

  it('should render the movie ratings', () => {
    const { getByText } = render(<MovieInfo movie={movie} />)

    movie.Ratings.forEach((r) => {
      expect(getByText(r.Source)).toBeInTheDocument()
      expect(getByText(r.Value)).toBeInTheDocument()
    })
  })

  it('should render the movie director', () => {
    const { getByText } = render(<MovieInfo movie={movie} />)

    expect(getByText(movie.Director)).toBeInTheDocument()
  })

  it('should render the movie writer', () => {
    const { getByText } = render(<MovieInfo movie={movie} />)

    expect(getByText(movie.Writer)).toBeInTheDocument()
  })

  it('should render the movie actors', () => {
    const { getByText } = render(<MovieInfo movie={movie} />)

    expect(getByText(movie.Actors)).toBeInTheDocument()
  })

  it('should render the movie plot', () => {
    const { getByText } = render(<MovieInfo movie={movie} />)

    expect(getByText(movie.Plot)).toBeInTheDocument()
  })
})
