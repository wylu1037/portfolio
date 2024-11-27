"use client";

import { useState } from "react";
import { Mail, Phone, Send, Copy } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { toast } from "sonner";
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
import { BorderBeam } from "../ui/border-beam";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard`);
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
                className="mb-2 text-3xl font-bold text-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Let&apos;s Connect
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground"
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
                onClick={() => copyToClipboard("wylu1037@gmail.com", "Email")}
                className={cn(
                  "group flex items-center justify-between",
                  "rounded-lg bg-secondary/40 p-4 transition-all",
                  "hover:bg-secondary/60 dark:bg-secondary/20 dark:hover:bg-secondary/30",
                  "backdrop-blur-sm",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-background p-2 ring-1 ring-border/40">
                    <Mail className="h-5 w-5 text-foreground/80" />
                  </div>
                  <span className="font-medium text-foreground">
                    wylu1037@gmail.com
                  </span>
                </div>
                <Copy className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </button>

              <button
                onClick={() => copyToClipboard("+86 155 4947 2950", "Phone")}
                className={cn(
                  "group flex items-center justify-between",
                  "rounded-lg bg-secondary/40 p-4 transition-all",
                  "hover:bg-secondary/60 dark:bg-secondary/20 dark:hover:bg-secondary/30",
                  "backdrop-blur-sm",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-background p-2 ring-1 ring-border/40">
                    <Phone className="h-5 w-5 text-foreground/80" />
                  </div>
                  <span className="font-medium text-foreground">
                    +86 155 4947 2950
                  </span>
                </div>
                <Copy className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </motion.div>

            <div className="relative mt-8 rounded-xl">
              <motion.form
                onSubmit={handleSubmit}
                className={cn(
                  "space-y-6 rounded-xl border border-border/50 bg-background/50 p-6",
                  "shadow-sm backdrop-blur-sm",
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
                  <Select>
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
                    placeholder="Enter your message"
                    required
                    className="min-h-[150px] border-border focus:border-border focus:ring-ring"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    required
                    className="border-border text-black"
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground"
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
                  className="w-full bg-foreground text-background transition-colors hover:bg-foreground hover:text-background dark:bg-blue-500 dark:font-semibold dark:text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
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
