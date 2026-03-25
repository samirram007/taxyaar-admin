
import { useNavigate } from "@tanstack/react-router"
import type { Row } from "@tanstack/react-table"
import { useTopicArticle } from "../contexts/topic_article-context"
import type { TopicArticle } from "../data/schema"

import { Route as TopicArticleDetailRoute } from '@/routes/_protected/help-center/_layout/topic_article/_layout/$id'
import { Route as RelatedArticleRoute } from '@/routes/_protected/help-center/_layout/topic_article/_layout/$id/related-article'
import { DataTableRowActions } from "./data-table-row-actions"

interface DataTableRowActionsProps {
    row: Row<TopicArticle>
}

const RowActions = (props: DataTableRowActionsProps) => {
    const navigate = useNavigate()
    const { setOpen, setCurrentRow } = useTopicArticle()
    const { row } = props
    return (
        <DataTableRowActions<TopicArticle>
            row={row}
            onEdit={(data) => {
                setCurrentRow(data) 
                navigate({
                    to: TopicArticleDetailRoute.to,
                    params: { id: data.id! },
                })

            }}
            onRelatedArticle={(data) => {
                setCurrentRow(data)
                navigate({
                    to: RelatedArticleRoute.to,
                    params: { id: data.id! },
                })

            }}
            onDelete={(data) => {
                setCurrentRow(data)
                setOpen("delete")
            }}
        />
    )
}

export default RowActions