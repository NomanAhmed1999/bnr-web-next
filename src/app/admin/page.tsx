import AdminHeader from "@/components/AdminHeader";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function AdminPage() {
    return (
      <SidebarProvider>
      <AppSidebar />
      <main className="mt-[68px] ms-2">
        <SidebarTrigger />
        <h1>Admin Page</h1>
      </main>
    </SidebarProvider>
    )
  }
  
  