import { redirect } from 'next/navigation'

import { ListingPage } from '@/modules/listing/listing-page'
import { PageProps } from '@/types/next'

type Props = PageProps<
  {},
  {
    s?: string
    page?: string
  }
>

export default async function Page({ params, searchParams }: Props) {
  if (searchParams?.s && !searchParams?.page) {
    return redirect(`/?s=${searchParams.s}&page=1`)
  }

  return <ListingPage params={params} searchParams={searchParams} />
}
