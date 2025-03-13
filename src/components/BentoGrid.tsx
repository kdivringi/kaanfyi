import type React from "react"
import { cn } from "@/lib/utils"


interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-6", // Increased gap for better separation
        className,
      )}
    >
      {children}
    </div>
  )
}

export default BentoGrid

