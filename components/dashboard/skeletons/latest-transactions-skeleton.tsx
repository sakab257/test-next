import React from 'react'
import { Card, CardContent, CardHeader } from '../../ui/card'
import { Separator } from '../../ui/separator'
import { Skeleton } from '../../ui/skeleton'
import TransactionsSkeleton from './transactions-skeleton'

const LatestTransactionsSkeleton = () => {
  return (
    <Card>
        <CardHeader>
            <Skeleton className='w-full h-[28px]'/>
            <Skeleton className='w-[60px] h-[20px]'/>
        </CardHeader>
        <Separator/>
        <CardContent className='w-full h-full flex flex-col justify-evenly gap-1'>
            <TransactionsSkeleton />
            <TransactionsSkeleton />
            <TransactionsSkeleton />
            <TransactionsSkeleton />
            <TransactionsSkeleton />
            <TransactionsSkeleton />
        </CardContent>
    </Card>
  )
}

export default LatestTransactionsSkeleton
