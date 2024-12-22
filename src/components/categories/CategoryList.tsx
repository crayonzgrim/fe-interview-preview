'use client'

import { useState } from 'react'

import { CategoryItem } from './CategoryItem'

// const CATEGORIES = [
//   'All',
//   'React.js',
//   'Next.js',
//   'Node.js',
//   'Javascript',
//   'Typescript',
//   '자료구조',
//   '알고리즘',
//   '네트워크'
// ]

interface ICATEGORY {
  id: string
  title: string
  image?: any | string
  contents?: any[]
}

const CATEGORIES: ICATEGORY[] = [
  {
    id: 'all',
    title: 'All',
    image: '/images/algorithm.jpg',
    contents: []
  },
  {
    id: 'react',
    title: 'React.js',
    image: '/images/react.png',
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
    title: 'Next.js',
    image: '/images/next.jpg',
    contents: []
  },
  {
    id: 'node',
    title: 'Node.js',
    image: '/images/node.png',
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
    title: 'Javascript',
    image: '/images/js.png',
    contents: []
  },
  {
    id: 'typescript',
    title: 'Typescript',
    image: '/images/ts.png',
    contents: []
  },
  {
    id: 'data-structure',
    title: '자료구조',
    image: '/images/data-structure.png',
    contents: []
  },
  {
    id: 'algorithm',
    title: '알고리즘',
    image: '/images/algorithm.jpg',
    contents: []
  },
  {
    id: 'network',
    title: '네트워크',
    image: '/images/network.svg',
    contents: []
  }
]

export const CategoryList = () => {
  /** Property */
  const [selectedCategory, setSelectedCategory] = useState('all')

  //선택된 메뉴 색상
  const selectedMenuClassName = `rounded-sm bg-black px-3 py-1 text-white`

  /** Function */
  const changeCategoryHandler = (value: string) => {
    setSelectedCategory(value)
  }

  /** Render */
  return (
    <div className="">
      <div className="my-10 flex justify-center gap-3">
        {CATEGORIES.map((menu) => {
          return (
            <button
              key={menu.id}
              onClick={() => changeCategoryHandler(menu.id)}
              className={
                selectedCategory === menu.id
                  ? selectedMenuClassName
                  : 'rounded-sm border border-black px-3 py-1'
              }
            >
              {menu.title}
            </button>
          )
        })}
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <div className="grid w-full grid-cols-4 gap-4 px-24 py-4">
          {CATEGORIES.filter((data) =>
            selectedCategory === 'all' ? true : data.id === selectedCategory
          ).map((category) => {
            return (
              <CategoryItem
                key={category.id}
                id={category.id}
                title={category.title}
                image={category.image}
                // description={blog.description}
                // category={blog.category}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
