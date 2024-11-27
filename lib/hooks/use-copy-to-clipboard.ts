"use client";

import { useState } from "react";
import { toast } from "sonner";
type UseCopyToClipboardProps = {
  timeout?: number;
};

export default function useCopyToClipboard({
  timeout = 2000,
}: UseCopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string, type: "Email" | "Phone") => {
    if (typeof window === "undefined" || !navigator.clipboard?.writeText) {
      toast.error("Clipboard not supported");
      return;
    }

    if (!text) {
      toast.error("No text to copy");
      return;
    }

    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      toast.success(`${type} copied to clipboard`);
      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    });
  };

  return { isCopied, copyToClipboard };
}
