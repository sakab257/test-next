import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='absolute top-0 w-full bg-red-400 h-15 flex items-center'>
      <SidebarTrigger className="ml-2" />
    </div>
  )
}

export default Dashboard
