"use client";

import * as React from "react";

import { Persona } from "@/components/persona";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar";
import { LampDesk, Rss } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebar = [
  {
    name: "Home",
    href: "/",
    icon: LampDesk,
    badge: "1"
  },
  {
    name: "Feed",
    href: "/feed",
    icon: Rss,
    badge: "2"
  }
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Persona />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup key='group'>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebar.map(nav => (
                <SidebarMenuItem key={nav.name}>
                  <SidebarMenuButton asChild isActive={pathname === nav.href}>
                    <Link href={nav.href}>
                      <div className='flex items-center gap-2'>
                        <nav.icon className='w-5 h-5' />
                        <span className='font-medium'>{nav.name}</span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>{nav.badge}</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
