import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "next-intl";

export default function Login() {
  const locale = useLocale();

  return (
    <div className="-mt-16 flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <Card className="bg-slate-50 shadow-xl dark:bg-slate-900">
          <CardContent className="space-y-6 px-6 pb-6 pt-8">
            <h1 className="mb-8 text-center text-3xl font-semibold">
              Forgot your password?
            </h1>

            <p className="text-center text-gray-400">
              To reset your password, please enter the email address of your
              Stonix account.
            </p>

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
            </div>

            <Button className="h-12 w-full font-medium">
              Reset my password
            </Button>

            <p className="text-center text-gray-400">
              <Link
                href={`/${locale}/signin`}
                className="underline transition-colors"
              >
                Go to sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
