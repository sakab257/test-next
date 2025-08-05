import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { general,help } from "./nav-links"
import { DropdownMenuDemo } from "./dropdown-profile"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { BadgeCheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"


export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <div className="bg-red-400 w-full h-14 rounded-xl flex items-center justify-center">
          <Link className="w-full flex justify-center" href={'/'}><h1 className="text-2xl font-bold">Test</h1></Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {general.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild>
                    <a href={link.url}>
                      <link.icon />
                      <span>{link.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>Aide & Paramètres</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {help.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild>
                    <a href={link.url}>
                      <link.icon />
                      <span>{link.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border rounded-2xl py-0">
        <div className="w-full h-14 rounded-xl flex items-center justify-between px-2">
          <div className="w-full h-max flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm">John DOE</p>
              <Badge className="h-4 min-w-5 rounded-full px-1 scale-95">
                <BadgeCheckIcon />
                Vérifié
              </Badge>
            </div>
          </div>
          <DropdownMenuDemo />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
