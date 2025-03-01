'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type CategoryItemProps = {
  id: string
  title: string
  image: string | undefined
}

export const CategoryItem = ({ id, title, image }: CategoryItemProps) => {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push(`/questions/${id}`)}
      className="flex h-40 w-full flex-col gap-2 overflow-hidden rounded-sm border border-black bg-white transition-all hover:bg-transparent hover:shadow-[-7px_7px_0px_#000000]"
    >
      <p className="flex h-10 w-full items-center justify-center border border-black text-center text-black">
        {title}
      </p>

      <div className="flex h-full w-full items-center justify-center p-3">
        <Image
          priority
          src={image ?? ''}
          alt={id}
          width={70}
          height={70}
          className="object-contain"
        />
      </div>
    </Button>
  )
}
