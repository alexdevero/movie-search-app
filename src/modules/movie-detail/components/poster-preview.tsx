import Image from 'next/image'

type Props = {
  posterUrl: string
  title: string
}

export const PosterPreview = ({ posterUrl, title }: Props) => {
  return (
    <div className="mx-auto sm:px-6 md:mx-0" data-testid="poster-preview">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={posterUrl}
          alt={title}
          width={300}
          height={400}
          className="h-full w-full object-cover object-center"
          data-testid="poster-preview-image"
        />
      </div>
    </div>
  )
}
