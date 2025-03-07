"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuthContext } from "@/context/auth-context";
import { useEmailPasswordLogin } from "@/firebase/auth/email-password-login";
import { useEmailPasswordRegistration } from "@/firebase/auth/email-password-registration";
import { useEmailVerification } from "@/firebase/auth/email-verification-link";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Shell } from "lucide-react";

const FormSchemaEmailPassword = z.object({
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email({
      message: "Please enter a valid email.",
    }),
  password: z
    .string({
      required_error: "Password is required.",
    })
    .min(8, {
      message: "Password must be at least 8 characters.",
    }),
});

export default function SignUpPage() {
  const { user } = useAuthContext();
  const locale = useLocale();
  const router = useRouter();

  const { isPendingEmailPasswordLogin } = useEmailPasswordLogin();
  const {
    emailPasswordRegistration,
    errorEmailPasswordRegistration,
    isPendingEmailPasswordRegistration,
  } = useEmailPasswordRegistration();
  const {
    isEmailVerificationSent,
    isEmailVerificationPending,
    errorVerificationLink,
    sendEmailVerificationLink,
  } = useEmailVerification();

  const formEmailPassword = useForm<z.infer<typeof FormSchemaEmailPassword>>({
    resolver: zodResolver(FormSchemaEmailPassword),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (user && user.emailVerified) {
      router.push(`/${locale}/dashboard`);
    }
  }, [user, locale, router]);

  async function onSubmitEmailPasswordRegistration(
    data: z.infer<typeof FormSchemaEmailPassword>,
  ) {
    await emailPasswordRegistration(data.email, data.password);
  }

  const handleSendVerificationEmail = async () => {
    try {
      await sendEmailVerificationLink();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="-mt-20 flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {user ? (
          <div className="flex w-full flex-col items-center gap-4">
            <h1 className="text-center text-xl font-bold">Connected !</h1>
            <p>
              Hey{" "}
              <b className="italic underline underline-offset-4">
                {user.email}
              </b>{" "}
              👋
            </p>
            {user.emailVerified ? (
              <p className="text-md font-semibold text-green-900">
                Your email is verified. Redirecting to dashboard...
              </p>
            ) : (
              <>
                <p className="text-md font-semibold text-red-600">
                  Your email is not verified.
                </p>
                <Button
                  disabled={
                    isPendingEmailPasswordLogin ||
                    isPendingEmailPasswordRegistration ||
                    isEmailVerificationPending
                  }
                  onClick={handleSendVerificationEmail}
                >
                  {isEmailVerificationPending && (
                    <Shell className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Send verification email
                </Button>
              </>
            )}
            {isEmailVerificationSent && (
              <p className="text-md font-semibold text-green-900">
                The email was successfully sent, check your email box to confirm
              </p>
            )}
            {errorVerificationLink && (
              <p className="text-md font-semibold text-red-900">
                {errorVerificationLink}
              </p>
            )}
          </div>
        ) : (
          <Card className="bg-slate-50 shadow-xl dark:bg-slate-900">
            <CardContent className="space-y-6 px-6 pb-6 pt-8">
              <h1 className="mb-8 text-3xl font-semibold">Get Started</h1>

              <Form {...formEmailPassword}>
                <form className="w-full space-y-6">
                  <FormField
                    control={formEmailPassword.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="m@example.com"
                            required
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formEmailPassword.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="************"
                            required
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    className="h-12 w-full font-medium"
                    type="button"
                    disabled={
                      isPendingEmailPasswordLogin ||
                      isPendingEmailPasswordRegistration ||
                      isEmailVerificationPending
                    }
                    onClick={formEmailPassword.handleSubmit(
                      onSubmitEmailPasswordRegistration,
                    )}
                  >
                    {isPendingEmailPasswordRegistration && (
                      <Shell className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Sign Up
                  </Button>
                  {errorEmailPasswordRegistration && (
                    <span className="mt-4 block text-center text-sm font-semibold text-red-500">
                      {errorEmailPasswordRegistration ===
                        "auth/email-already-in-use" &&
                        "This user already exists "}
                    </span>
                  )}
                </form>
              </Form>

              <p className="text-center text-gray-400">
                Have an account?{" "}
                <Link
                  href={`/${locale}/signin`}
                  className="underline transition-colors"
                >
                  Sign in now
                </Link>
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
