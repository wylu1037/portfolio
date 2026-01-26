"use server";

import { z } from "zod";
import { resend } from "@/lib/resend";
import { action } from "@/lib/safe-action";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  terms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms"),
});

export const sendEmailAction = action
  .inputSchema(contactSchema)
  .action(async ({ parsedInput: { name, email, subject, message } }) => {
    try {
      const { data, error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>", // Note: Resend requires a verified domain or uses this for testing
        to: ["wylu1037@gmail.com"],
        subject: `New Contact Form Submission: ${subject}`,
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      if (error) {
        console.error("Resend Error:", error);
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (err) {
      console.error("Unknown error sending email:", err);
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      };
    }
  });
