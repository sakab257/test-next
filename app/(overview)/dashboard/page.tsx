import React from 'react'
import { Component } from '@/components/charts/first-chart'
import { ChartAreaInteractive } from'@/components/charts/snd-chart'
import { BarChartInteractive } from '@/components/charts/thd-chart'

const Dashboard = () => {
  return (
    <div className='flex h-full w-full'>
      <BarChartInteractive />
    </div>
  )
}

export default Dashboard
