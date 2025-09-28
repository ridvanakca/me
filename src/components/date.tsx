import React from "react";

interface DateProps {
  children: React.ReactNode;
  className?: string;
}

export function Date({ children, className = "" }: DateProps) {
  return <span className={`text-sm italic text-muted-foreground ${className}`}>{children}</span>;
}
