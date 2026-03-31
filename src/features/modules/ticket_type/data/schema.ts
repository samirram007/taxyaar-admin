import { z } from "zod";

export const ticketTypeSchema = z.object({
    id: z.number(),
    name: z.string(),
    code: z.string(),
    description: z.string().nullable().optional(),
    status: z.string(),
});


export type TicketType = z.infer<typeof ticketTypeSchema>;
export const ticketTypeList = z.array(ticketTypeSchema);
export type TicketTypeList = z.infer<typeof ticketTypeList>;