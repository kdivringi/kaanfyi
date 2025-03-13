import { MoveRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  a: string
  className?: string
  external?: boolean
}

const ProjectCard = ({ title, description, imageSrc, a, className, external }: ProjectCardProps) => {
  const IconComp = external ? ExternalLink : MoveRight
  return (
    <div className={cn("bento-card", className)}>
      <div className="flex flex-col h-full overflow-hidden rounded-xl border-2 border-border shadow-md">
        <div className="relative aspect-video border-b-2 border-border overflow-hidden">
          <img src={imageSrc || "/placeholder.svg"} alt={title} /** fill **/ className="object-cover" />
        </div>
        <div className="flex flex-col p-6 bg-background flex-1">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <Button variant="outline" size="sm" className="mt-auto w-fit font-medium" asChild>
            <a href={a} className="flex items-center gap-1">
              View project <IconComp size={14} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

