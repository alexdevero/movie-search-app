import { PageProps } from '@/types/next'
import { SearchResponse } from '@/types/omdb-api'
import { stringBoolean } from '@/utils/parser'

import { Listing } from './components/listing'
import { Pagination } from './components/pagination'
import { Search } from './components/search'

const apiURL = process.env.NEXT_PUBLIC_API_URL

const getResults = async (query?: string, pageNumber?: string) => {
  if (!query) {
    return
  }

  console.log(`${apiURL}/search?s=${query}&page=${pageNumber ?? 100}`)
  try {
    const res = await fetch(`${apiURL}/search?s=${query}&page=${pageNumber ?? 100}`)

    const data = await res.json()

    return data as SearchResponse
  } catch (error) {
    console.error(error)

    return
  }
}

type Props = PageProps<
  {},
  {
    s?: string
    page?: string
  }
>

export async function ListingPage({ searchParams }: Props) {
  const { s, page } = searchParams ?? {}
  const {
    Search: results,
    totalResults,
    Response: hasNextPage,
  } = (await getResults(s, page)) ?? {}
  const hasNextPageBool = hasNextPage ? stringBoolean(hasNextPage) : false
  const currentPage = page ? parseInt(page) : 1

  return (
    <div className="flex h-screen w-screen flex-col" data-testid="listing-page">
      <Search searchQuery={s} />
      <Listing movies={results} searchQuery={s} currentPage={currentPage} />
      <Pagination
        searchQuery={s}
        currentPage={currentPage}
        hasNextPage={hasNextPageBool}
      />
    </div>
  )
}
