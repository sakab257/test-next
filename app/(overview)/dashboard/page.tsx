'use client'
import Assets from '@/components/dashboard/assets/assets'
import TotalAssets from '@/components/dashboard/assets/total-assets'
import { DashboardChart } from '@/components/dashboard/charts/dashboard-chart'
import React, { useEffect, useState } from 'react'
import Loading from './loading'
import LatestTransactions from '@/components/dashboard/transactions/latest-transactions'

const Dashboard = () => {
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWaiting(false);
    }, 200);

    return () => clearTimeout(timer); // Nettoyage
  }, []);
  if(waiting){
    return (
      <Loading />
    )
  }else{
    return (
    <>
    
    <div className='h-full w-full flex flex-1 flex-col'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full p-2 gap-x-3 gap-y-3'>
        <TotalAssets/>
        <Assets />
        
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full mb-2 px-3 gap-x-3'>
        <DashboardChart />
        <LatestTransactions />
      </div>
    </div>
    </>
  )
  }
  
}

export default Dashboard
