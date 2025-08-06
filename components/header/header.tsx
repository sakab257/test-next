import React from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Input } from '../ui/input'
import {Search} from 'lucide-react'
import { ProfileHeader } from '../profile/profile-card'
import { ModeToggle } from '../theme/mode-toggle'

const Header = () => {
  return (
    <div className='w-full h-14 flex items-center justify-between border-b-1'>
      <SidebarTrigger className='ml-2'/>
      <div className='w-max mr-2 relative flex items-center'>
        <div className='flex items-center'>
          <Search className='absolute top-1/2 left-2 -translate-y-1/2 text-muted-foreground' size={20} />
          <Input placeholder='Rechercher' className='pl-9 rounded-lg bg-accent lg:w-lg transition-all' />
        </div>
        <ProfileHeader />
        <ModeToggle />

      </div>
    </div>
  )
}

export default Header
