import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { EllipsisVertical } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const TransactionsSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[90px] rounded-xl" />
      </div>
      <Skeleton className='h-10 w-10 rounded-xl'/>
    </div>
  )
}

export default TransactionsSkeleton