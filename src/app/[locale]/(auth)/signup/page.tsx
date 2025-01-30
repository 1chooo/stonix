import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useLocale } from "next-intl";

export default function Login() {
  const locale = useLocale();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 -mt-16">
      <div className="w-full max-w-md space-y-8">
        <Card className="shadow-xl">
          <CardContent className="pt-8 px-6 pb-6 space-y-6">
            <h1 className="text-3xl font-semibold  mb-8">Get Started</h1>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm" htmlFor="password">
                  Password
                </label>
                <Input id="password" type="password" className="h-12" placeholder="************" />
              </div>
            </div>

            <Button className="w-full h-12 font-medium">
              Sign Up
            </Button>

            <p className="text-center text-gray-400">
              Have an account?{" "}
              <Link
                href={`/${locale}/signin`}
                className="transition-colors underline"
              >
                Sign in now
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
