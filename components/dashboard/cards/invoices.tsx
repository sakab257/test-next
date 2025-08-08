import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { EllipsisVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Invoices = () => {
  return (
    <>
        <Card className='shadow-none border-0 py-1'>
            <CardHeader className='flex px-2 items-center'>
                <div className='flex flex-1 gap-2 items-center'>
                    <CardTitle>
                        <Avatar>
                            <AvatarImage src="/avatar.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </CardTitle>
                    <CardDescription className='text-primary flex flex-col'>
                        <span className='font-semibold'>John DOE</span>
                        <span className='text-muted-foreground'>1000 €</span>
                    </CardDescription>
                </div>
                <Button variant='ghost' size='icon'><EllipsisVertical className='size-5'/></Button>
            </CardHeader>
        </Card>
    </>
  )
}

export default Invoices