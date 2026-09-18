import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface WhatsAppButtonProps {
  href: string;
  label?: string;
  className?: string;
  size?: "default" | "sm" | "lg";
}

export function WhatsAppButton({
  href,
  label = "Confirmar por WhatsApp",
  className,
  size = "default",
}: WhatsAppButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant: "primary", size }), className)}
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      {label}
    </Link>
  );
}
