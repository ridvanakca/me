"use client";

import * as React from "react";

import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function Persona() {
  return (
    <Link href='/' className='hover:bg-sidebar-accent rounded-md p-2'>
      <SidebarMenu>
        <SidebarMenuItem className='flex items-center gap-3'>
          <Avatar className='size-10'>
            <AvatarImage className='object-cover' src='./photo.png' />
            <AvatarFallback>RA</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <span className='text-md font-semibold'>Ridvan Akca</span>
            <span className='text-xs text-gray-600'>Software Developer</span>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </Link>
  );
}
