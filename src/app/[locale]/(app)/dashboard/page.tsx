import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useLocale } from "next-intl";

export default function DashboardPage() {
  const locale = useLocale();

  return (
    <ContentLayout title="Dashboard">
      <div className="text-sm text-center justify-center my-4">
        <Link href={`/${locale}/signin`} className="text-sm underline dark:text-sky-400 text-sky-500 font-semibold">
          Sign in
        </Link>{' '}
        to save focus history and tasks.
      </div>
    </ContentLayout>
  );
}
