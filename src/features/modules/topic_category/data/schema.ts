import { ActiveInactiveStatusSchema } from '@/types/active-inactive-status';
import { z } from 'zod';





export const topicCategorySchema = z.object({
  id: z.number().int().positive().nullish(),
  name: z.string().min(1),
  description: z.string().nullish(),
  slug: z.string().min(1),
  status: ActiveInactiveStatusSchema,
})

export type TopicCategory = z.infer<typeof topicCategorySchema>
export const topicCategoryListSchema = z.array(topicCategorySchema)
export type TopicCategoryList = z.infer<typeof topicCategoryListSchema>



export const formSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is required.' }),
    slug: z.string().min(1, { message: 'Slug is required.' }),
    status: z.string().min(1, { message: 'Status is required.' }),
    description: z.string().nullish(),
    isEdit: z.boolean(),
  })

export type TopicCategoryForm = z.infer<typeof formSchema>