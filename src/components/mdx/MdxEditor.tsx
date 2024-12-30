'use client'

import type { ForwardedRef } from 'react'

import {
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'

type MdxEditorProps = {
  editorRef: ForwardedRef<MDXEditorMethods> | null
} & MDXEditorProps

const MdxEditor = ({ editorRef, ...props }: MdxEditorProps) => {
  return (
    <MDXEditor
      {...props}
      ref={editorRef}
      onChange={console.log}
      autoFocus={true}
      readOnly={true}
      plugins={[
        headingsPlugin(),
        markdownShortcutPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin()
        // toolbarPlugin({
        //   toolbarClassName: 'my-classname',
        //   toolbarContents: () => (
        //     <div className="flex w-full border bg-red-500">
        //       {' '}
        //       <UndoRedo />
        //       <BlockTypeSelect />
        //       <BoldItalicUnderlineToggles />
        //       <CodeToggle />
        //     </div>
        //   )
        // })
      ]}
      contentEditableClassName="prose"
      className="rounded-md border border-black px-5 py-3"
    />
  )
}

export default MdxEditor
