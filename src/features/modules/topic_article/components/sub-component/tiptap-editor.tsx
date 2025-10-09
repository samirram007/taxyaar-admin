// src/Tiptap.tsx
import { EditorContent, EditorContext, useEditor } from '@tiptap/react'
import { BubbleMenu, FloatingMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import { useMemo } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import type { TopicArticleForm } from '../../data/schema'

type Props = {
    form: UseFormReturn<TopicArticleForm>
}
const TiptapEditor = ({ form }: Props) => {
    const editor = useEditor({
        extensions: [StarterKit], // define your extension array
        content: form.watch('content'), // initial content
    })

    // Memoize the provider value to avoid unnecessary re-renders
    const providerValue = useMemo(() => ({ editor }), [editor])

    return (
        <EditorContext.Provider value={providerValue}>
            <EditorContent editor={editor} />
            <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
            <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
        </EditorContext.Provider>
    )
}

export default TiptapEditor