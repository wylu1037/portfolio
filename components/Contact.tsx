"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-8">
          <div>
            <motion.h1
              className="mb-2 text-4xl font-bold text-black"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Something on your mind? Feel free to drop me a message.
            </motion.p>
          </div>

          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <h2 className="text-lg font-semibold text-black">Email</h2>
              <p className="text-gray-600">wylu1037@gmail.com</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-black">Phone</h2>
              <p className="text-gray-600">+86 155 4947 2950</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-black">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  required
                  className="border-gray-200 focus:border-gray-400 focus:ring-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-black">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="border-gray-200 focus:border-gray-400 focus:ring-gray-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-black">
                Subject
              </Label>
              <Select>
                <SelectTrigger className="border-gray-200 focus:border-gray-400 focus:ring-gray-400">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="billing">Billing Question</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-black">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                required
                className="min-h-[150px] border-gray-200 focus:border-gray-400 focus:ring-gray-400"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                required
                className="border-gray-300 text-black"
              />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <Link href="#" className="text-black hover:underline">
                  Terms and Conditions
                </Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-black text-white transition-colors hover:bg-gray-800"
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
        </div>
      </motion.div>
    </div>
  );
}
