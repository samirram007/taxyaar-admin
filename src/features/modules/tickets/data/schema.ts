import { z } from "zod";

export const TicketMasterSchema = z.object({
    ticketId: z.number(),
    assignedBy: z.string().nullable().optional(),
    assignedById: z.number().nullable().optional(),
    assignedTo: z.number().nullable().optional(),
    typeId: z.number(),
    priorityId: z.number(),
    statusId: z.number(),
    mobileNumber: z.string().nullable().optional(),
    email: z.string().nullable().optional(),
    pan: z.string().nullable().optional(),
    platform: z.string().nullable().optional(),
    subject: z.string(),
    description: z.string().nullable().optional(),
    pausedAt: z.string().nullable().optional(),
    pausedDuration: z.number().nullable().optional(),
    createdAt: z.string(),
    updatedAt: z.string(),
});



export type Request = z.infer<typeof TicketMasterSchema>;
export const requestListSchema = z.array(TicketMasterSchema);
export type RequestList = z.infer<typeof requestListSchema>; 