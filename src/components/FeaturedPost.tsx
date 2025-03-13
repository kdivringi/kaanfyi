import { MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


interface FeaturedPostProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  a: string
  className?: string
}

const FeaturedPost = ({ title, excerpt, date, readTime, a, className }: FeaturedPostProps) => {
  return (
    <div className={cn("bento-card", className)}>
      <div className="flex flex-col h-full p-6 bg-background rounded-xl border-2 border-border shadow-md">
        <article className="flex flex-col h-full">
          <a href={a}>
            <h3 className="text-lg font-medium mb-2 hover:underline">{title}</h3>
          </a>
          <p className="text-sm text-muted-foreground mb-1">
            {date} • {readTime}
          </p>
          <p className="text-muted-foreground mb-4">{excerpt}</p>
          <Button variant="outline" size="sm" className="mt-auto w-fit font-medium" asChild>
            <a href={a} className="flex items-center gap-1">
              Read article <MoveRight size={14} />
            </a>
          </Button>
        </article>
      </div>
    </div>
  )
}

export default FeaturedPost

