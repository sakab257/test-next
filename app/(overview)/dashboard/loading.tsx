import React from 'react'
import AssetsSkeleton from '@/components/dashboard/skeletons/assets-skeletons'
import DashboardSkeleton from '@/components/dashboard/skeletons/dashboard-skeleton'
import LatestTransactionsSkeleton from '@/components/dashboard/skeletons/latest-transactions-skeleton'

const Loading = () => {
  return (
    <>
    <div className='h-full w-full flex flex-1 flex-col'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full p-2 gap-x-3 gap-y-3'>
        <AssetsSkeleton />
        <AssetsSkeleton />
        <AssetsSkeleton />
        <AssetsSkeleton />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full mb-2 px-3 gap-x-3'>
        <DashboardSkeleton />
        <LatestTransactionsSkeleton />
      </div> 
      
    </div>
        
    </>
  )
}

export default Loading