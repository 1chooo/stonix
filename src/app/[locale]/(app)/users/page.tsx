"use client"

import { ContentLayout } from "@/components/admin-panel/content-layout";

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const formSchema = z.object({
  email: z.string().email({
    message: "請輸入有效的電子郵件地址。",
  }),
  userName: z.string().min(2, {
    message: "用戶名至少需要 2 個字符。",
  }),
  role: z.enum(["user", "admin", "moderator"]),
  avatar: z.string().url().optional(),
})
export default function UsersPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "user@example.com",
      userName: "John Doe",
      role: "user",
      avatar: "https://github.com/1chooo.png",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    // 模擬 API 調用
    setTimeout(() => {
      console.log(values)
      toast({
        title: "個人資料已更新",
        description: "您的帳戶信息已成功更新。",
        duration: 5000,
      })
      setIsLoading(false)
    }, 1000)
  }

  return (
    <ContentLayout title="Users">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>頭像</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={field.value} alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Input {...field} type="url" placeholder="輸入頭像 URL" />
                  </div>
                </FormControl>
                <FormDescription>輸入您的頭像圖片 URL。</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>電子郵件</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="your@email.com" />
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
                <Select onValueChange={field.onChange} defaultValue={field.value}>
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
