import { Sidebar, SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import Header from "@/components/header/header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <SidebarInset className="overflow-hidden">
        <Header />
        <main className="h-full">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
