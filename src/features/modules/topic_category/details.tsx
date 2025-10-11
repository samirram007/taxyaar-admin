
import { Main } from '@/layouts/components/main'





import { useHelpCenter } from '@/features/help-center/contexts/help_center-context'
import { useEffect } from 'react'
import { ActionPages } from './components/action-page'
import { type TopicCategory } from './data/schema'


// Import the correct type for transporterListSchema



interface TopicCategoryProps {
    data?: TopicCategory
}

export default function CategoryDetails(props: TopicCategoryProps) {
    const { data } = props
    const keyName = 'topicCategory'
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
