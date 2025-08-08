'use client'
import Assets from '@/components/dashboard/cards/assets'
import TotalAssets from '@/components/dashboard/cards/total-assets'
import { DashboardChart } from '@/components/dashboard/charts/dashboard-chart'
import React, { useEffect, useState } from 'react'
import Loading from './loading'
import LatestInvoices from '@/components/dashboard/invoices/latest-invoices'

const Dashboard = () => {
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWaiting(false);
    }, 300);

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
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full'>
        <TotalAssets/>
        <Assets />
        
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full mb-2 px-3 gap-7'>
        <DashboardChart />
        <LatestInvoices/>
      </div>
    </div>
    </>
  )
  }
  
}

export default Dashboard
