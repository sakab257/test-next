import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {Badge} from '@/components/ui/badge'
import { BadgeCheckIcon } from 'lucide-react'
import { ProfileDropdownHeader, ProfileDropdownMenu } from './dropdown-profile'

export const ProfileSidebar = () => {
  return (
    <div className="w-full h-14 rounded-xl flex items-center justify-between px-2">
      <div className="w-full h-max flex items-center gap-2">
        <Avatar>
          <AvatarImage src="/avatar.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm">John DOE</p>
          <Badge className="h-5 min-w-5 rounded-full px-1 scale-95">
            <BadgeCheckIcon />
            Vérifié
          </Badge>
        </div>
      </div>
      <ProfileDropdownMenu />
    </div>
  )
}

export const ProfileHeader = () => {
  return (
    <div className="w-max h-14 rounded-xl flex items-center justify-between px-2 gap-2">

      <ProfileDropdownHeader />
    </div>
  )
}

