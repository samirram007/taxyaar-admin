import { ActiveInactiveStatusSchema } from '@/types/active-inactive-status';
import { TrueFalseSchema } from '@/types/true-false';
import { z } from 'zod';
import { topicSectionSchema } from '../../topic_section/data/schema';





export const topicArticleSchema = z.object({
  id: z.number().int().positive().nullish(),
  title: z.string().min(1),
  description: z.string().nullish(),
  slug: z.string().min(1),
  status: ActiveInactiveStatusSchema,
  isMarked: TrueFalseSchema,
  content: z.string(),
  topicSectionId: z.number().int().positive(),
  topicSection: topicSectionSchema.nullish(),


})
export type TopicArticle = z.infer<typeof topicArticleSchema>
export const topicArticleListSchema = z.array(topicArticleSchema)
export type TopicArticleList = z.infer<typeof topicArticleListSchema>



export const formSchema = z
  .object({
    title: z.string().min(1, { message: 'Title is required.' }),
    slug: z.string().min(1, { message: 'Slug is required.' }),
    status: z.string().min(1, { message: 'Status is required.' }),
    description: z.string().nullish(),
    content: z.string(),
    isMarked: z.boolean(),
    topicSectionId: z.number().int().positive(),
    topicSection: topicSectionSchema.nullish(),
    isEdit: z.boolean(),
  })

export type TopicArticleForm = z.infer<typeof formSchema>