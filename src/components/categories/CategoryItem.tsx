'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type CategoryItemProps = {
  id: string
  title: string
  image: any
}

export const CategoryItem = ({ id, title, image }: CategoryItemProps) => {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push(`/questions/${id}`)}
      className="w-50 flex h-40 flex-col gap-2 overflow-hidden rounded-sm border border-black transition-all hover:cursor-pointer hover:bg-black hover:text-white active:bg-black active:text-white"
    >
      <p className="flex h-10 w-full items-center justify-center bg-black text-center text-white">
        {title}
      </p>

      <div className="flex h-full w-full items-center justify-center">
        <Image src={image} alt={id} width={100} height={100} />
      </div>
    </Button>
  )
}
