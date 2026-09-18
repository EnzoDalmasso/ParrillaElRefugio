import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-12 w-full rounded-xl border border-cream-50/15 bg-carbon-900/60 px-4 text-sm text-cream-50 placeholder:text-stone-500 transition-colors focus:border-ember-400/70 focus:outline-none focus:ring-2 focus:ring-ember-400/25",
          "aria-invalid:border-brasa-600/70 aria-invalid:ring-brasa-600/20",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full rounded-xl border border-cream-50/15 bg-carbon-900/60 px-4 py-3 text-sm text-cream-50 placeholder:text-stone-500 transition-colors focus:border-ember-400/70 focus:outline-none focus:ring-2 focus:ring-ember-400/25",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-medium text-cream-100", className)}
      {...props}
    />
  );
}

export function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mt-1.5 text-xs text-orange-400">{children}</p>;
}
