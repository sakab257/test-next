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
import { EllipsisVertical, ArrowDownToLine, ArrowUpFromLine, MoveUpRight, MoveDownLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { latestTransactions } from '@/lib/fake-data';
import clsx from 'clsx';

const Transactions = () => {
  return (
    <>
        {latestTransactions.map((transaction,index)=>{
            return(
                <Card className='shadow-none border-0 py-1' key={index}>
                    <CardHeader className='flex px-2 items-center'>
                        <div className='flex flex-1 gap-2 items-center'>
                            <CardTitle>
                                <Avatar>
                                    <AvatarImage src={`${transaction.avatar}`} alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </CardTitle>
                            <CardDescription className='text-primary flex flex-col'>
                                <span className='font-semibold'>{transaction.name}</span>
                                <span className={clsx(
                                    'flex items-center justify-center text-xs font-semibold text-secondary w-max px-2 py-0.5 rounded-xl',
                                    {
                                        'bg-destructive': transaction.sent
                                    },
                                    {
                                        'bg-validate': !transaction.sent
                                    }
                                )}
                                >{transaction.amount.data} {transaction.amount.devise} {transaction.sent ? <MoveUpRight className='ml-1 size-3.5'/> : <MoveDownLeft className='ml-1 size-3.5'/>}</span>
                            </CardDescription>
                        </div>
                        <Button variant='ghost' size='icon'><EllipsisVertical className='size-5'/></Button>
                    </CardHeader>
                </Card>
            )
        })}
    </>
  )
}

export default Transactions