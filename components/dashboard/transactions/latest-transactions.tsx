import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Transactions from './transactions';
import { Separator } from '@/components/ui/separator';
import { latestTransactions } from '@/lib/fake-data';

const LatestTransactions = () => {
  return (
    <>
        <Card className='mt-3 lg:mt-0'>
            <CardHeader>
                <CardTitle className='text-xl'>Dernières Transactions - 2025</CardTitle>
                <CardDescription>Jan - Dec</CardDescription>
            </CardHeader>
            <Separator/>
            <CardContent className='flex flex-col justify-evenly h-full gap-1'>
            <Transactions array={latestTransactions} /> {/* Je sais pas pourquoi j'ai cette erreur là ...  */}
            {/* Ok ça fonctionne bien mtn, c'était juste le extends dans le fichier 'transactions.tsx' qui posait problème */}
            </CardContent>
        </Card>
    </>
  )
}

export default LatestTransactions
