import { z } from "zod";

export const ticketStatusSchema = z.object({
    id: z.number(),

    name: z.string(),
    code: z.string().optional(),

    description: z.string().nullable().optional(),

    isActive: z.boolean().optional(),
    isPublic: z.boolean().optional(),

    displayOrder: z.number().nullable().optional(),
    colorCode: z.string().nullable().optional(),
});


export type TicketStatus = z.infer<typeof ticketStatusSchema>;
export const ticketStatusList = z.array(ticketStatusSchema);
export type TicketStatusList = z.infer<typeof ticketStatusList>;