import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3 } from "lucide-react"

const tools = [
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
    title: "Compound Interest Calculator",
    description: "See how your investments grow over time by earning interest on interest and letting your money work for you.",
    category: "SAVINGS",
    categoryColor: "text-blue-500",
  },
];

export default function FinancialToolsPage() {
  return (
    <main className='relative mx-auto mb-16 max-w-4xl px-8 py-24'>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Try our free financial tools and calculators</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All the interactive tools and calculators you need to visualize and navigate your financial journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow h-[350px] relative bg-slate-50 dark:bg-slate-800">
              <CardHeader>
                <div className="mb-4">{tool.icon}</div>
                <h2 className="text-xl font-semibold">{tool.title}</h2>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground">{tool.description}</p>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className={`font-medium ${tool.categoryColor}`}>
                    {tool.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

