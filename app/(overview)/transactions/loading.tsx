import React from 'react'
import { Skeleton } from '@/components/ui/skeleton';
import { allTransactions } from '@/lib/all-transactions';
import { Separator } from '@/components/ui/separator';
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import TransactionsSkeleton from '@/components/dashboard/skeletons/transactions-skeleton';


const Loading = () => {

    return (
      <div className='h-full w-full'>
        <Skeleton className="w-[230px] h-10 m-4 mx-auto lg:mx-6" />
        <Separator />
        <Card className='m-2'>

          <CardContent className='flex flex-col justify-evenly h-full'>
            {/* <TransactionsSkeleton /> */}
            {allTransactions.map((transaction, index) => (
              <div key={index} className='py-4'>
                <TransactionsSkeleton />
                {index !== allTransactions.length - 1 && <Separator className='mt-6'/>}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    )
}


export default Loading
