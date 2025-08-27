import React from 'react'
import { Button } from '../ui/button'
import { Bell } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Notifications = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className='rounded-full' asChild>
          <Button variant='ghost' size='icon' className='rounded-full border-1 relative'>
          <div className='absolute w-2 h-2 bg-destructive top-0 right-0 rounded-full'></div>
          <Bell />
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='pointer-events-none'>Aucune nouvelle notifications...</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>

  )
}

export default Notifications
