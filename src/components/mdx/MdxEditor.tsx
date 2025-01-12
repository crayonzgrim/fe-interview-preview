'use client'

import { type ForwardedRef, useEffect, useState } from 'react'

import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeToggle,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  UndoRedo,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'

type MdxEditorProps = {
  editorRef: ForwardedRef<MDXEditorMethods> | null
} & MDXEditorProps

const MdxEditor = ({ editorRef, ...props }: MdxEditorProps) => {
  /** Property */
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    try {
      const user = localStorage.getItem('user')
      if (user) {
        const parsedUser = JSON.parse(user)
        console.log(parsedUser)
        if (parsedUser.email === 'cappu159@gmail.com') {
          setIsAdmin(true)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  /** Render */
  return (
    <MDXEditor
      {...props}
      ref={editorRef}
      onChange={console.log}
      autoFocus={false}
      readOnly={!isAdmin}
      plugins={[
        headingsPlugin(),
        markdownShortcutPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        toolbarPlugin({
          toolbarClassName: 'my-classname',
          toolbarContents: () => (
            <div className="flex w-full border bg-red-500">
              {' '}
              <UndoRedo />
              <BlockTypeSelect />
              <BoldItalicUnderlineToggles />
              <CodeToggle />
            </div>
          )
        })
      ]}
      contentEditableClassName="prose"
      className="rounded-md border-2 border-red-900 px-5 py-3"
    />
  )
}

export default MdxEditor
