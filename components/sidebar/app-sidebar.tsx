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
import { ProfileDropdownMenu } from "../profile/dropdown-profile"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { BadgeCheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {ProfileSidebar} from "../profile/profile-card"


export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <div className=" w-full h-14 rounded-xl flex items-center justify-center">
          <Link className="w-full flex justify-center" href={'/'}><h1 className="text-2xl font-bold">Logo</h1></Link>
        </div>
      </SidebarHeader>
      <Separator />
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
      <Separator />
      <SidebarFooter className="rounded-2xl py-0">
        <ProfileSidebar />
      </SidebarFooter>
    </Sidebar>
  )
}
