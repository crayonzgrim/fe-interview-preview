'use client'

import { useState } from 'react'

const CATEGORIES = [
  'All',
  'React.js',
  'Next.js',
  'Node.js',
  'Javascript',
  'Typescript',
  '자료구조',
  '알고리즘',
  '네트워크'
]

export const CategoryList = () => {
  /** Property */
  const [selectedCategory, setSelectedCategory] = useState('All')

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
              key={menu}
              onClick={() => changeCategoryHandler(menu)}
              className={
                selectedCategory === menu
                  ? selectedMenuClassName
                  : 'rounded-sm border border-black px-3 py-1'
              }
            >
              {menu}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-4 gap-4 px-24 py-4"></div>
    </div>
  )
}
