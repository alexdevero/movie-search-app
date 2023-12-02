import Link from 'next/link'

type Props = {
  searchQuery?: string
  currentPage: number
  hasNextPage: boolean
}

export const Pagination = ({ currentPage, hasNextPage, searchQuery }: Props) => {
  const hasPrevPage = currentPage > 1
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-center" data-testid="pagination">
        {hasPrevPage && (
          <Link
            href={
              currentPage > 1 ? `?s=${searchQuery ?? ''}&page=${currentPage - 1}` : '/'
            }
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            data-testid="pagination-previous"
          >
            Previous
          </Link>
        )}
        {hasNextPage && (
          <Link
            href={hasNextPage ? `?s=${searchQuery ?? ''}&page=${currentPage + 1}` : '/'}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            data-testid="pagination-next"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  )
}
