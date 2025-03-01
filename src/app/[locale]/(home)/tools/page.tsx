import Link from "next/link";
import { useLocale } from "next-intl";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gradient } from "@/components/gradient";
import { Particles } from "@/components/magicui/particles";

import { BarChart3 } from "lucide-react";

const tools = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
    title: "Compound Interest Calculator",
    description:
      "See how your investments grow over time by earning interest on interest and letting your money work for you.",
    category: "SAVINGS",
    categoryColor: "text-blue-500",
    path: "compound-interest-calculator",
  },
];

export default function FinancialToolsPage() {
  const locale = useLocale();

  return (
    <>
      <Gradient />
      <Particles
        className="absolute left-0 top-0 h-full w-full"
        quantity={50}
      />
      <main className="relative mx-auto mb-16 max-w-4xl px-8 py-24">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12 space-y-8 text-center">
            <h1 className="text-3xl font-extrabold">
              Try our{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Free
              </span>{" "}
              Financial Tools and Calculators
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              All the interactive tools and calculators you need to visualize
              and navigate your financial journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {tools.map((tool, index) => (
              <Link href={`/${locale}/tools/${tool.path}`} key={index}>
                <Card
                  key={index}
                  className="relative h-[250px] border-none bg-slate-50 shadow-lg transition-shadow hover:shadow-xl dark:bg-slate-900"
                >
                  <CardHeader>
                    <div className="mb-4">{tool.icon}</div>
                    <h2 className="text-lg font-semibold">{tool.title}</h2>
                  </CardHeader>
                  <CardContent className="flex h-full flex-col">
                    <p className="text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                    <div className="absolute bottom-4 left-4">
                      <Badge
                        variant="secondary"
                        className={`font-medium ${tool.categoryColor}`}
                      >
                        {tool.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
