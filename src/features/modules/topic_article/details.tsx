
import { Main } from '@/layouts/components/main'





import { useHelpCenter } from '@/features/help-center/contexts/help_center-context'
import { useEffect } from 'react'
import { ActionPages } from './components/action-page'
import { type TopicArticle } from './data/schema'


// Import the correct type for transporterListSchema



interface TopicArticleProps {
    data?: TopicArticle
}

export default function ArticleDetails(props: TopicArticleProps) {
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
                    <ActionPages currentRow={data}
                        key={`${keyName}-add`} />
                </div>
            </Main>

            {/* <Pages /> */}
        </>
    )
}
