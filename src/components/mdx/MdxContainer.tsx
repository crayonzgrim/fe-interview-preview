'use client'

import { forwardRef } from 'react'

import { type MDXEditorMethods, type MDXEditorProps } from '@mdxeditor/editor'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('./MdxEditor'), {
  ssr: false
})

export const ForwardRefMdxEditorContainer = forwardRef<
  MDXEditorMethods,
  MDXEditorProps
>((props, ref) => {
  return <Editor {...props} editorRef={ref} />
})

ForwardRefMdxEditorContainer.displayName = 'ForwardRefEditor'
