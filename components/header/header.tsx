import React from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Input } from '../ui/input'
import {Bell } from 'lucide-react'
import { ProfileHeader } from '../profile/profile-card'
import { ModeToggle } from '../theme/mode-toggle'
import { Button } from '../ui/button'
import Notifications from './notifications'

const Header = () => {
  return (
    <div className='w-full h-14 flex items-center justify-between border-b-1'>
      <SidebarTrigger className='ml-2'/>
      <div className='w-max mr-2 relative flex items-center'>
        <Notifications />
        <ProfileHeader />
        <ModeToggle />

      </div>
    </div>
  )
}

export default Header
