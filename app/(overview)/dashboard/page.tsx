import Assets from '@/components/cards/assets'
import TotalAssets from '@/components/cards/total-assets'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex h-full w-full'>
      <TotalAssets/>
      <Assets />
    </div>
  )
}

export default Dashboard
