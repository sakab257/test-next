'use client'
import React from 'react'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import { Separator } from '../../ui/separator'
import { Skeleton } from '../../ui/skeleton'

const DashboardSkeleton = () => {
  return (
    <Card className='lg:w-2/3 ml-3 mr-3 h-max'>
        <CardHeader>
            <Skeleton className='w-[300px] h-[28px]'/>
            <Skeleton className='w-[60px] h-[20px]'/>
        </CardHeader>
        <Separator/>
        <CardContent className='w-full'>
            <Skeleton className='min-h-[200px] h-[200px] md:h-[300px] w-full' />
        </CardContent>
    </Card>
  )
}

export default DashboardSkeleton