import Link from 'next/link'

type Props = {
  query?: string
  page?: string
}

export const BackButton = ({ page, query }: Props) => {
  return (
    <div className="flex w-full items-center justify-start py-3 sm:px-6">
      <Link
        href={{
          pathname: '/',
          ...(query
            ? {
                query: {
                  s: query,
                  page: page ?? 1,
                },
              }
            : {}),
        }}
        className="flex h-8 w-8 items-center justify-center rounded-md border-0 bg-transparent hover:bg-slate-100"
        data-testid="back-button"
      >
        <svg
          className="h-6 w-6 text-gray-500 hover:text-slate-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          data-testid="back-button-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </Link>
    </div>
  )
}
