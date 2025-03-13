import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button"

export default function DynamicSection() {
    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6 border-b-2 border-border pb-2">Latest Articles</h2>
            <div className="space-y-10">
                {[1, 2, 3].map((i) => (
                    <article key={i} className="space-y-2 p-6 border-2 border-border rounded-xl bg-background shadow-md">
                        <a href={`/blog/article-${i}`}>
                            <h3 className="text-xl font-bold hover:underline">
                                {
                                    [
                                        "The Future of Web Development",
                                        "Design Systems in Practice",
                                        "Performance Optimization Techniques",
                                    ][i - 1]
                                }
                            </h3>
                        </a>
                        <p className="text-sm font-medium">
                            {["Mar 8, 2024 • 12 min read", "Feb 24, 2024 • 8 min read", "Feb 10, 2024 • 10 min read"][i - 1]}
                        </p>
                        <p>
                            {
                                [
                                    "Exploring the latest trends and technologies shaping the future of web development.",
                                    "How to build and maintain a design system that scales with your organization.",
                                    "Practical techniques to improve the performance of your web applications.",
                                ][i - 1]
                            }
                        </p>
                        <Button variant="outline" size="sm" className="mt-2 font-medium" asChild>
                            <a href={`/blog/article-${i}`} className="flex items-center gap-1">
                                Read more <MoveRight size={14} />
                            </a>
                        </Button>
                    </article>
                ))}
            </div>
        </div>
    )
}