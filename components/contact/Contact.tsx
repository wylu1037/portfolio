"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Wrapper from "@/components/shared/Wrapper";
import { BorderBeam } from "@/components/magicui/border-beam";
import useCopyToClipboard from "@/lib/hooks/use-copy-to-clipboard";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { sendEmailAction } from "@/actions/send-email";
import { Icon } from "@iconify/react";

export default function Contact() {
  const { isCopied: isCopiedEmail, copyToClipboard: copyEmailToClipboard } =
    useCopyToClipboard({ timeout: 2000 });
  const { isCopied: isCopiedPhone, copyToClipboard: copyPhoneToClipboard } =
    useCopyToClipboard({ timeout: 2000 });

  const onCopyEmail = () => {
    if (isCopiedEmail) return;
    copyEmailToClipboard("wylu1037@gmail.com", "Email");
  };

  const onCopyPhone = () => {
    if (isCopiedPhone) return;
    copyPhoneToClipboard("+86 155 4947 2950", "Phone");
  };

  const { execute, isExecuting } = useAction(sendEmailAction, {
    onSuccess: ({ data }) => {
      if (data?.success) {
        toast.success("Message sent successfully!");
        const form = document.querySelector("form") as HTMLFormElement;
        form?.reset();
      } else {
        toast.error(data?.error || "Failed to send message");
      }
    },
    onError: ({ error }) => {
      toast.error("An error occurred while sending the message.");
      console.error(error);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      terms: formData.get("terms") === "on",
    };
    execute(data);
  };

  return (
    <Wrapper className="mt-28 bg-transparent">
      <div className="min-h-screen w-full bg-transparent px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-8">
            <div>
              <motion.h1
                className="text-foreground mb-2 text-3xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Let&apos;s Connect
              </motion.h1>
              <motion.p
                className="text-muted-foreground text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                I&apos;m always open to discussing new opportunities and ideas.
                Feel free to reach out.
              </motion.p>
            </div>

            <motion.div
              className="grid gap-4 sm:grid-cols-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={onCopyEmail}
                className={cn(
                  "group flex items-center justify-between",
                  "bg-secondary/40 rounded-lg p-4 transition-all",
                  "hover:bg-secondary/60 dark:bg-secondary/20 dark:hover:bg-secondary/30",
                  "backdrop-blur-xs",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-background ring-border/40 rounded-md p-2 ring-1">
                    <Icon
                      icon="lucide:mail"
                      className="text-foreground/80 h-5 w-5"
                    />
                  </div>
                  <span className="text-foreground font-medium">
                    wylu1037@gmail.com
                  </span>
                </div>
                <Icon
                  icon="lucide:copy"
                  className="text-muted-foreground h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </button>

              <button
                onClick={onCopyPhone}
                className={cn(
                  "group flex items-center justify-between",
                  "bg-secondary/40 rounded-lg p-4 transition-all",
                  "hover:bg-secondary/60 dark:bg-secondary/20 dark:hover:bg-secondary/30",
                  "backdrop-blur-xs",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-background ring-border/40 rounded-md p-2 ring-1">
                    <Icon
                      icon="lucide:phone"
                      className="text-foreground/80 h-5 w-5"
                    />
                  </div>
                  <span className="text-foreground font-medium">
                    +86 155 4947 2950
                  </span>
                </div>
                <Icon
                  icon="lucide:copy"
                  className="text-muted-foreground h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </button>
            </motion.div>

            <div className="relative mt-8 rounded-xl">
              <motion.form
                onSubmit={handleSubmit}
                className={cn(
                  "border-border/50 bg-background/50 space-y-6 rounded-xl border p-6",
                  "shadow-xs backdrop-blur-xs",
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                      className="border-border focus:border-border focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      required
                      className="border-border focus:border-border focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">
                    Subject
                  </Label>
                  <Select name="subject">
                    <SelectTrigger className="border-border focus:border-border focus:ring-ring">
                      <SelectValue placeholder="Select the purpose of contact" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">
                        Full-time Opportunity
                      </SelectItem>
                      <SelectItem value="part-time">
                        Part-time Position
                      </SelectItem>
                      <SelectItem value="remote">Remote Work</SelectItem>
                      <SelectItem value="freelance">
                        Freelance Project
                      </SelectItem>
                      <SelectItem value="collaboration">
                        Collaboration
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required
                    className="border-border focus:border-border focus:ring-ring min-h-[150px]"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    name="terms"
                    required
                    className="border-border text-black"
                  />
                  <Label
                    htmlFor="terms"
                    className="text-muted-foreground text-sm"
                  >
                    I agree to the{" "}
                    <Link
                      href="#"
                      className="text-muted-foreground hover:underline"
                    >
                      Terms and Conditions
                    </Link>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="bg-foreground text-background hover:text-background w-full transition-colors hover:bg-blue-700 dark:bg-blue-700 dark:font-semibold dark:text-white hover:dark:bg-blue-600"
                  disabled={isExecuting}
                >
                  {isExecuting ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <Icon icon="lucide:send" className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </motion.form>
              <BorderBeam duration={12} delay={9} />
            </div>
          </div>
        </motion.div>
      </div>
    </Wrapper>
  );
}
