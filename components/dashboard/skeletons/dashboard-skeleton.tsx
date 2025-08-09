import React from 'react'
import { Card, CardContent, CardHeader } from '../../ui/card'
import { Separator } from '../../ui/separator'
import { Skeleton } from '../../ui/skeleton'

const DashboardSkeleton = () => {
  return (
    <Card className='h-max'>
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