"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxDemo({ label }: { label: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="jakarta-reular leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}
