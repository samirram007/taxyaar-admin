import type { UseFormReturn } from "react-hook-form"
import type { TopicArticleForm } from "../../data/schema"

type Props = {
    form: UseFormReturn<TopicArticleForm>
}
const DipikaEditor = (props: Props) => {
    return (
        <div>
            <h1>Dipika Editor</h1>
        </div>
    )
}

export default DipikaEditor