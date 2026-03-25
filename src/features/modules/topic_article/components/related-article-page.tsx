'use client'


import { Input } from '@/components/ui/input'
import type { TopicArticle } from '../data/schema'


interface Props {
    currentRow?: TopicArticle
}

export function RelatedArticlePage({ currentRow }: Props) {

    return <>
        <div>Article: {currentRow?.title}</div>
        <div>slug:{currentRow?.slug}</div>
        <div>status:{currentRow?.status}</div>
        <div>description:{currentRow?.description}</div>
        <div>isMarked:{currentRow?.isMarked}</div>
        <div>

            <div>Search related articles</div>
            <div><Input />

            </div>
        </div>
    </>

}
