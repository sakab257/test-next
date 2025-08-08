import React from 'react'
import AssetsSkeleton from '@/components/dashboard/skeletons/assets-skeletons'
import DashboardSkeleton from '@/components/dashboard/skeletons/dashboard-skeleton'

const Loading = () => {
  return (
    <>
    <div className='h-max w-full flex flex-1 flex-col'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full'>
        <AssetsSkeleton />
        <AssetsSkeleton />
        <AssetsSkeleton />
        <AssetsSkeleton />
      </div>
      <DashboardSkeleton />
    </div>
        
    </>
  )
}

export default Loading