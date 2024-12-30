'use client'

import { useState } from 'react'

import { MdxEditorUsage } from '@/components/mdx'

export const AnswerList = () => {
  const [markdown, setMarkdown] = useState(TEMP.content)

  const changeMarkdownHandler = (markdown: string) => {
    setMarkdown(markdown)
  }

  return (
    <div className="flex flex-col items-center justify-center border border-red-900 py-10">
      <div className="w-[80rem]">
        <h4>Q. {TEMP.title}</h4>

        <MdxEditorUsage
          markdown={markdown}
          handleChange={{ changeMarkdownHandler }}
        />
      </div>
    </div>
  )
}

const TEMP = {
  id: 0,
  title: '리액트의 라이프 사이클에 대해서 설명하세요',
  image: '',
  content: `리액트의 라이프사이클은 컴포넌트가 생성, 업데이트, 제거되는 과정을 관리합니다. <br />
주요 단계는 'Mount', 'Update', 'Unmount'이며, 각각을 처리하기 위해 React는 useEffect, useLayoutEffect 같은 훅과 클래스형 컴포넌트에서는 componentDidMount, componentDidUpdate, componentWillUnmount 같은 메서드를 제공합니다. 상태 변화나 렌더링 최적화를 위해 각 단계에서 적절히 활용하는 것이 중요합니다.`,
  like: 0,
  unlike: 0,
  createdDate: '2023-05-01',
  updatedDate: '2023-05-01'
}
