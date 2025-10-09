
import { Main } from '@/layouts/components/main'





import { ActionPages } from './components/action-page'
import { type TopicSection } from './data/schema'


// Import the correct type for transporterListSchema



interface TopicSectionProps {
    data?: TopicSection
}

export default function TransporterDetails(props: TopicSectionProps) {
    const { data } = props
    const keyName = 'topicSection'

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
