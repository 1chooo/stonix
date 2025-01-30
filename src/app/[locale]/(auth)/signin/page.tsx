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
        <Card className="shadow-xl bg-slate-50 dark:bg-slate-900">
          <CardContent className="pt-8 px-6 pb-6 space-y-6">
            <h1 className="text-3xl font-semibold  mb-8">Sign In Now</h1>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full h-12"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                  />
                </svg>
                Continue with Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="border-strong w-full border-t border-secondary" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-2 text-sm">or</span>
              </div>
            </div>

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

            <div className="text-center">
              <Link href={`/${locale}/forgot-password`} className="text-sm text-gray-400 hover: transition-colors underline">
                Forgot password?
              </Link>
            </div>

            <Button className="w-full h-12 font-medium">
              Sign In
            </Button>

            <p className="text-center text-gray-400">
              Don&apos;t have an account?{" "}
              <Link href={`/${locale}/signup`} className="transition-colors underline">
                Sign up now
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
