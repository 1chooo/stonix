"use client";

import * as z from "zod";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "@/firebase/config";
import { db } from "@/firebase/config";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "請輸入有效的電子郵件地址。" }),
  userName: z.string().min(2, { message: "用戶名至少需要 2 個字符。" }),
  role: z.enum(["user", "admin", "moderator"]),
  avatar: z.string().url().optional(),
});

export default function UsersPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      userName: "",
      role: "user",
      avatar: "",
    },
  });

  useEffect(() => {
    async function fetchUserData() {
      const user = auth.currentUser;
      if (!user) return;

      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const defaultUserName = user.displayName || (user.email ? user.email.slice(0, 2) : "JD");
        form.reset({
          email: userData.email || user.email,
          userName: userData.userName || defaultUserName,
          role: userData.role || "user",
          avatar: userData.avatar || "",
        });
      } else {
        // Firestore 無資料，使用 useAuthContext 的 user
        const userName = user.displayName || (user.email ? user.email.slice(0, 2) : "JD");
        form.reset({
          email: user.email || "",
          userName: userName,
          role: "user",
          avatar: user.photoURL || "",
        });
      }
    }

    fetchUserData();
  }, [form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const user = auth.currentUser;
    if (!user) {
      toast({
        title: "未登入",
        description: "請先登入再更新資料。",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        email: user.email, // Firebase Auth email
        userName: values.userName,
        role: values.role,
        avatar: values.avatar || "",
        updatedAt: new Date(),
      });

      toast({
        title: "個人資料已更新",
        description: "您的帳戶信息已成功更新。",
        duration: 5000,
      });
    } catch (error) {
      console.error("更新失敗", error);
      toast({
        title: "更新失敗",
        description: "請稍後再試。",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  }

  return (
    <ContentLayout title="Users">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Avatar</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="avatar"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-20 h-20">
                          <AvatarImage src={field.value} alt="Avatar" />
                          <AvatarFallback className="uppercase">
                            {form.getValues("userName").charAt(0)}
                            {form.getValues("userName").charAt(1)}
                          </AvatarFallback>
                        </Avatar>
                        <Input {...field} type="url" placeholder="輸入頭像 URL" />
                      </div>
                    </FormControl>
                    <FormDescription>輸入您的頭像圖片 URL。</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>電子郵件</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="your@email.com" disabled />
                </FormControl>
                <FormDescription>這是您的主要聯繫郵箱。</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>用戶名</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Your Name" />
                </FormControl>
                <FormDescription>這是您在平台上顯示的名稱。</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>角色</FormLabel>
                <Select onValueChange={field.onChange} value={field.value} disabled>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="選擇您的角色" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="user">用戶</SelectItem>
                    <SelectItem value="moderator">版主</SelectItem>
                    <SelectItem value="admin">管理員</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>您在系統中的角色。</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "更新中..." : "更新個人資料"}
          </Button>
        </form>
      </Form>
    </ContentLayout>
  );
}
