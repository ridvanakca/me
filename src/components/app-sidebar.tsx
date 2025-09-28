"use client";

import * as React from "react";

import { Persona } from "@/components/persona";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarRail, SidebarSeparator } from "@/components/ui/sidebar";
import { Book, ExternalLink, Github, LampDesk, Linkedin, Rss } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

const sidebar = [
  {
    name: "Home",
    href: "/",
    icon: LampDesk,
    badge: "1"
  },
  {
    name: "Journey",
    href: "/journey",
    icon: Rss,
    badge: "2"
  },
  {
    name: "Writings",
    href: "/writings",
    icon: Book,
    badge: "3"
  }
];

const online = [
  {
    name: "Github",
    href: "https://github.com/ridvanakca",
    icon: Github
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ridvanakca/",
    icon: Linkedin
  }
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key >= "1" && event.key <= "9") {
        const nav = sidebar.find(item => item.badge === event.key);
        if (nav) {
          router.push(nav.href);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Persona />
      </SidebarHeader>
      <SidebarContent className='overflow-x-hidden'>
        <SidebarGroup key='group'>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebar.map(nav => (
                <SidebarMenuItem key={nav.name}>
                  <SidebarMenuButton asChild isActive={pathname === nav.href}>
                    <Link href={nav.href} className='py-5'>
                      <div className='flex items-center gap-3'>
                        <nav.icon className='w-4 h-4' />
                        <span className='font-medium'>{nav.name}</span>
                      </div>
                      <SidebarMenuBadge>{nav.badge}</SidebarMenuBadge>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup key='online'>
          <SidebarGroupLabel>Online</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {online.map(item => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <a rel='noopener noreferrer' target='_blank' href={item.href} className='py-5'>
                      <div className='flex items-center gap-3'>
                        <item.icon className='w-4 h-4' />
                        <span className='font-medium'>{item.name}</span>
                      </div>
                      <SidebarMenuBadge>
                        <ExternalLink className='w-4 h-4' />
                      </SidebarMenuBadge>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
