import { type NextRequest } from 'next/server'

const omdbApiUrl = process.env.NEXT_PUBLIC_OMDB_API_URL
const omdbApiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY

/** A simple proxy to the OMDB API to avoid CORS issues
 * @param {NextRequest} req
 * @returns {Promise<NextResponse>}
 */
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const query = searchParams.get('s')
  const pageNumber = searchParams.get('page')

  const reqUrl = `${omdbApiUrl}?s=${query}&page=${pageNumber}&apikey=${omdbApiKey}`

  const response = await fetch(reqUrl)

  return new Response(response.body)
}
