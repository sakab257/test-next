import React from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Input } from '../ui/input'
import {Bell } from 'lucide-react'
import { ProfileHeader } from '../profile/profile-card'
import { ModeToggle } from '../theme/mode-toggle'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className='w-full h-14 flex items-center justify-between border-b-1'>
      <SidebarTrigger className='ml-2'/>
      <div className='w-max mr-2 relative flex items-center'>
        <Button variant='ghost' size='icon' className='rounded-full border-1 relative'>
          <div className='absolute w-2 h-2 bg-destructive top-0 right-0 rounded-full'></div>
          <Bell />
        </Button>
        <ProfileHeader />
        <ModeToggle />

      </div>
    </div>
  )
}

export default Header
