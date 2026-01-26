"use server";

import { z } from "zod";
import { resend } from "@/lib/resend";
import { action } from "@/lib/safe-action";

import { contactSchema } from "@/lib/schemas";

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
