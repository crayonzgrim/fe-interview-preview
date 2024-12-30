'use client'

import { useRef } from 'react'

import { Button } from '@/components/ui/button'
import { type MDXEditorMethods } from '@mdxeditor/editor'

import { ForwardRefMdxEditorContainer } from './MdxContainer'

type MdxEditorUsageProps = {
  markdown: string
  handleChange: { changeMarkdownHandler: (markdown: string) => void }
}

export const MdxEditorUsage = ({
  markdown,
  handleChange
}: MdxEditorUsageProps) => {
  /** Property */
  const editorRef = useRef<MDXEditorMethods>(null)

  /** Function */
  const handleSave = () => {
    if (editorRef.current) {
      const currentMarkdown = editorRef.current.getMarkdown()
      console.log(currentMarkdown)
    }
  }

  /** Render */
  return (
    <div className="space-y-5 py-5">
      <ForwardRefMdxEditorContainer
        markdown={markdown}
        onChange={handleChange.changeMarkdownHandler}
      />

      <Button onClick={handleSave}>저장</Button>
    </div>
  )
}
