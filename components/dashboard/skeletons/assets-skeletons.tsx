import React from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from '@/components/ui/skeleton';

const AssetsSkeleton = () => {
  return (
    <>
            <div className=" w-full">
                    <div className="relative">
                    <Card className="relative w-full h-60">
                        <CardHeader>
                        <CardDescription>
                            <Skeleton className='w-[105px] h-[17px]' />
                        </CardDescription>
                        <CardTitle>
                            <Skeleton className='w-[155px] h-[36px]' />
                        </CardTitle>
                        <CardDescription>
                            <Skeleton className='w-[55px] h-[17px]' />
                        </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex flex-row justify-between lg:flex-col xl:flex-row lg:items-start xl:justify-between xl:items-center mt-auto lg:gap-1.5">
                            <Skeleton className="w-[75px] h-[22px]"/>
                            <Skeleton className="w-[145px] h-[16px]"/>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            
    </>
  )
}

export default AssetsSkeleton