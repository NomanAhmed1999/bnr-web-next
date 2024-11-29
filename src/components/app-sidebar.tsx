import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import AdminHeader from "./AdminHeader"

// Menu items.
const items = [
  {
    title: "Main",
    url: "#",
    icon: Settings,
    // icon: Home,
  },
  {
    title: "Sphere",
    url: "#",
    icon: Settings,
  },
  {
    title: "Genrapide",
    url: "#",
    icon: Settings,
  },
  {
    title: "Solution",
    url: "#",
    icon: Settings,
  },
  {
    title: "Service",
    url: "#",
    icon: Settings,
  },
  {
    title: "Prowin",
    url: "#",
    icon: Settings,
  },
  {
    title: "Pricing",
    url: "#",
    icon: Settings,
  },
  {
    title: "Growth",
    url: "#",
    icon: Settings,
  },
  {
    title: "Contact",
    url: "#",
    icon: Settings,
  },
  {
    title: "Case Study",
    url: "#",
    icon: Settings,
  },
  {
    title: "Blogs",
    url: "#",
    icon: Settings,
  },
  {
    title: "Articles",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <>
      <AdminHeader />
      <Sidebar className="mt-[68px]">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Admin Penel</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  )
}
