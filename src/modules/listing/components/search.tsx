'use client'

import { usePathname, useRouter } from 'next/navigation'

import { debounce } from 'lodash'

type Props = {
  searchQuery?: string
}

export const Search = ({ searchQuery }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleSearchQueryChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    const newUrl = `${pathname}?s=${encodeURIComponent(query)}&page=1`

    if (query === '') {
      router.push('/')
    } else {
      router.push(newUrl)
    }
  }, 500)

  return (
    <div
      className="mx-auto mt-2 flex w-full max-w-[460px] py-3"
      data-testid="search-wrapper"
    >
      <label
        htmlFor="search-input"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search-input"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 ps-9 text-sm text-gray-900 outline-none transition-all focus:border-blue-500 focus:shadow-sm focus:shadow-blue-200 focus:ring-blue-500"
          placeholder="Search title of movie, series, episode..."
          defaultValue={searchQuery}
          data-testid="search-input"
          onChange={handleSearchQueryChange}
        />
      </div>
    </div>
  )
}
