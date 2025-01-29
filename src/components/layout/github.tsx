import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"


export function VisitGitHub() {
  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="GitHub"
      className="hidden sm:block"
      onClick={() => window.open('https://github.com/1chooo/refinaid', '_blank')}
    >
      <Github />
    </Button>
  )
}
