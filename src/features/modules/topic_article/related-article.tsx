
import { Main } from '@/layouts/components/main'





import { useHelpCenter } from '@/features/help-center/contexts/help_center-context'
import { useEffect } from 'react'
import { RelatedArticlePage } from './components/related-article-page'
import { type TopicArticle } from './data/schema'


// Import the correct type for transporterListSchema



interface TopicArticleProps {
    data?: TopicArticle
}

export default function RelatedArticle(props: TopicArticleProps) {
    const { data } = props
    const keyName = 'topicArticle'
    const { setHeaderVisible } = useHelpCenter()
    useEffect(() => {
        setHeaderVisible(false)
    }, [])

    return (

        <>
            <Main className='min-w-full'>

                <div className=' flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
                    <RelatedArticlePage
                        currentRow={data}
                        key={`${keyName}-add`} />
                </div>
            </Main>

            {/* <Pages /> */}
        </>
    )
}
