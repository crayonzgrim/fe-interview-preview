'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

const INPUT_FORM = [
  {
    id: 'category',
    label: '카테고리',
    placeholder: 'category',
    type: 'text'
  },
  {
    id: 'title',
    label: '제목',
    placeholder: 'title',
    type: 'text'
  },
  {
    id: 'image',
    label: '내용 이미지',
    placeholder: 'image',
    type: 'file'
  },
  {
    id: 'description',
    label: '내용',
    placeholder: 'description',
    type: 'text'
  }
]

export const AddInterview = () => {
  const [image, setImage] = useState()
  const [assets, setAssets] = useState({
    upload_area: null
  })

  return (
    <form
      className="flex flex-col items-center justify-center gap-4 border border-black px-96 py-10"
      // className="flex flex-col items-center justify-center px-5 py-10"
      style={{ border: '1px dashed red' }}
    >
      {INPUT_FORM.map((form) => {
        return (
          <div key={form.id} className="w-full">
            <p>{form.label}</p>
            {form.type === 'file' ? (
              <label>
                <Image
                  src={
                    !image ? '/images/react.png' : URL.createObjectURL(image)
                  }
                  alt="upload"
                  width={200}
                  height={200}
                  className="max-h-[200px] max-w-[200px] border"
                />
                {/* <Image className="mt-4" src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="upload" width={200} height={200} /> */}
              </label>
            ) : null}
            <Input
              type={form.type}
              placeholder={form.placeholder}
              className="rounded-none border"
            />
          </div>
        )
      })}

      <Button type={'submit'} className="w-full">
        저장
      </Button>
    </form>
  )
}
