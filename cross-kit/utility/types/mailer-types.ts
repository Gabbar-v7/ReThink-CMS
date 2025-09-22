import type { Attachment } from "nodemailer/lib/mailer";

export interface EmailPayload {
    to?: string,
    bcc?: string[],
    subject: string,
    text: string,
    html?: string,
    attachments?: Attachment[]
}