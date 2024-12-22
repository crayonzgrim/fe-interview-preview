'use client'

import { Button } from '@/components/ui/button'
import { useParams, useRouter } from 'next/navigation'

interface QuestionListProps {
  _id: string
  category: string
  title: string
  description: string
  contents: {
    title: string
    image: string
    likes: number
    unlikes: number
    createdAt: string
    updatedAt: string
  }[]
}

export default function QuestionList() {
  const params = useParams()
  const router = useRouter()

  console.log({ params: params.id })

  return (
    <div className="w-full">
      {TEMP.filter((item) => item.id === params.id).map((item) => {
        return (
          <div
            key={item.id}
            className="flex w-full flex-col items-center justify-center"
          >
            <h3 className="w-96 text-center">QuestionsPage - {item.id}</h3>
            <div className="flex h-full w-full flex-col items-center justify-center space-y-4 border p-8">
              {item.contents.map((content, index) => {
                return (
                  <Button
                    key={content.id}
                    onClick={() => router.push(`/answer/${content.id}`)}
                    className="w-[50rem] rounded-md border border-black bg-transparent p-4 py-6 text-black transition-all hover:text-white"
                  >
                    <h4 className="w-full text-left">
                      {index + 1}. {content.title}
                    </h4>
                  </Button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const TEMP = [
  {
    id: 'react',
    contents: [
      {
        id: 0,
        title: '리액트의 라이프 사이클에 대해서 설명하세요',
        image: '',
        like: 0,
        unlike: 0,
        createdDate: '2023-05-01',
        updatedDate: '2023-05-01'
      },
      {
        id: 1,
        title: '리액트의 컴포넌트 적용 방법에 대해서 설명하세요',
        image: '',
        like: 0,
        unlike: 0,
        createdDate: '2023-05-01',
        updatedDate: '2023-05-01'
      },
      {
        id: 2,
        title: '리액트의 상태 관리 방법에 대해서 설명하세요',
        image: '',
        like: 0,
        unlike: 0,
        createdDate: '2023-05-01',
        updatedDate: '2023-05-01'
      }
    ]
  },
  {
    id: 'next',
    contents: [
      {
        id: 0,
        title: 'Next.js의 주요 기능에 대해서 설명하세요',
        image: '',
        like: 0,
        unlike: 0,
        createdDate: '2023-05-01',
        updatedDate: '2023-05-01'
      },
      {
        id: 1,
        title: 'Next.js의 서버 사이드 프로그래밍에 대해서 설명하세요',
        image: '',
        like: 0,
        unlike: 0,
        createdDate: '2023-05-01',
        updatedDate: '2023-05-01'
      },
      {
        id: 2,
        title: 'Next.js의 클라이언트 사이드 프로그래밍에 대해서 설명하세요',
        image: '',
        like: 0,
        unlike: 0,
        createdDate: '2023-05-01',
        updatedDate: '2023-05-01'
      }
    ]
  },
  {
    id: 'node',
    contents: [
      {
        id: 0,
        title: 'Node.js의 주요 기능에 대해서 설명하세요',
        image: '',
        like: 0,
        unlike: 0,
        createdDate: '2023-05-01',
        updatedDate: '2023-05-01'
      },
      {
        id: 1,
        title: 'Node.js의 서버 사이드 프로그래밍에 대해서 설명하세요',
        image: '',
        like: 0,
        unlike: 0,
        createdDate: '2023-05-01',
        updatedDate: '2023-05-01'
      },
      {
        id: 2,
        title: 'Node.js의 클라이언트 사이드 프로그래밍에 대해서 설명하세요',
        image: '',
        like: 0,
        unlike: 0,
        createdDate: '2023-05-01',
        updatedDate: '2023-05-01'
      }
    ]
  },
  {
    id: 'javascript',
    contents: []
  },
  {
    id: 'typescript',
    contents: []
  },
  {
    id: 'data-structure',
    contents: []
  },
  {
    id: 'algorithm',
    contents: []
  },
  {
    id: 'network',
    contents: []
  }
]
