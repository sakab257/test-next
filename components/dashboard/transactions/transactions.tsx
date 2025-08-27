import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
    CardContent,
  CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { EllipsisVertical, ArrowDownLeft, ArrowUpRight, MoveUpRight, MoveDownLeft, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { latestTransactions } from '@/lib/fake-data';
import clsx from 'clsx';
import { Separator } from '@/components/ui/separator';

interface TransactionProps{
    array: Array<{
        avatar: string,
        name: string,
        amount: {
            data: string,
            devise: string
        },
        sent: boolean
    }>
}

// interface TransactionProps extends Array<TransactionProps>{}

const Transactions = ({array}:TransactionProps) => {
  return (
    <>
        {array.map((transaction,index)=>{
            return(
                <Card className='shadow-none border-0 py-2' key={index}>
                    <CardContent className='flex px-2 pt-2 items-center'>
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
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild><Button variant='ghost' size='icon'><EllipsisVertical className='size-5' /></Button></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem><ArrowUpRight />Envoyer</DropdownMenuItem>
                                <DropdownMenuItem><ArrowDownLeft />Demander</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className='text-destructive'><Trash2 className='text-destructive'/>Supprimer</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardContent>
                    {index !== array.length - 1 && <Separator className='py-0' />}
                </Card>
            )
        })}
    </>
  )
}

export default Transactions
