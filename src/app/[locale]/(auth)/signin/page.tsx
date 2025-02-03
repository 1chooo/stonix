import Link from "next/link"
import { useLocale } from "next-intl";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 -mt-16">
      <div className="w-full max-w-md space-y-8">
        <Card className="shadow-xl bg-slate-50 dark:bg-slate-900">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <CardDescription>
            Login to your Stonix account
            </CardDescription>
          </CardHeader>

          <CardContent className=" px-6 pb-6 space-y-6">
            <form>
              <div className="grid gap-6">
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

                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full h-12"
                  >
                    <Github className="w-5 h-5 mr-2"/>
                    Continue with GitHub
                  </Button>
                </div>

                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>

                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        href={`/${locale}/forgot-password`}
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <Input id="password" type="password" placeholder="************" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </div>

                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href={`/${locale}/signup`} className="underline underline-offset-4">
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary ">
          By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
          and <a href="#">Privacy Policy</a>.
        </div>

      </div>
    </div >
  );
};
