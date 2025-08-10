import React from 'react'
import { Card, CardContent, CardHeader } from '../../ui/card'
import { Separator } from '../../ui/separator'
import { Skeleton } from '../../ui/skeleton'

const DashboardSkeleton = () => {
  return (
    <Card className='h-full'>
        <CardHeader>
            <Skeleton className='w-[300px] h-[28px]'/>
            <Skeleton className='w-[60px] h-[20px]'/>
        </CardHeader>
        <Separator/>
        <CardContent className='w-full h-full'>
            <Skeleton className='h-full w-full' />
        </CardContent>
    </Card>
  )
}

export default DashboardSkeleton