"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEmailPasswordRegistration } from "@/firebase/auth/emailPasswordRegistration";
import { useEmailVerification } from "@/firebase/auth/emailVerificationLink";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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

export default function Login() {
  const locale = useLocale();

  const {
    emailPasswordRegistration,
    errorEmailPasswordRegistration,
    isPendingEmailPasswordRegistration,
  } = useEmailPasswordRegistration();
  const {
    isEmailVerificationPending,
  } = useEmailVerification();

  const formEmailPassword = useForm<z.infer<typeof FormSchemaEmailPassword>>({
    resolver: zodResolver(FormSchemaEmailPassword),
  });

  async function onSubmitEmailPasswordRegistration(
    data: z.infer<typeof FormSchemaEmailPassword>
  ) {
    await emailPasswordRegistration(data.email, data.password);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 -mt-20">
      <div className="w-full max-w-md space-y-8">
        <Card className="shadow-xl bg-slate-50 dark:bg-slate-900">
          <CardContent className="pt-8 px-6 pb-6 space-y-6">
            <h1 className="text-3xl font-semibold  mb-8">Get Started</h1>

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
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full flex items-center gap-2">
                  <Button
                    className="w-full"
                    type="button"
                    disabled={
                      isPendingEmailPasswordRegistration ||
                      isEmailVerificationPending
                    }
                    onClick={formEmailPassword.handleSubmit(
                      onSubmitEmailPasswordRegistration
                    )}
                  >
                    {isPendingEmailPasswordRegistration && (
                      <Shell className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Sign Up
                  </Button>
                </div>
                {(errorEmailPasswordRegistration) && (
                  <span className="text-red-500 text-center text-sm block mt-4 font-semibold">
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
                className="transition-colors underline"
              >
                Sign in now
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
