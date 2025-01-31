import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export default function AppLayout({
  children
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <AdminPanelLayout>
      {children}
    </AdminPanelLayout>
  );
}
