
import { Button } from "@/components/ui/button"
import { MoveRight, ExternalLink } from "lucide-react"


export default function BlogSectionButton({ external }: { external?: boolean }) {
    const IconComp = external ? ExternalLink : MoveRight 
    return (
        <Button variant="outline" size="sm" className="mt-auto w-fit font-medium" asChild>
            <a href="https://blog.kaan.fyi" className="flex items-center gap-1">
                Read blog <IconComp size={14} />
            </a>
        </Button>
    )

}