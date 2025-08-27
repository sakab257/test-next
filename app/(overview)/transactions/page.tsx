'use client'
import React, {useState, useEffect} from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Transactions from '@/components/dashboard/transactions/transactions'
import { allTransactions } from '@/lib/all-transactions';
import { Separator } from '@/components/ui/separator';
import Loading from './loading';

const TransactionsPage = () => {
  const [waiting, setWaiting] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setWaiting(false);
      }, 200);

      return () => clearTimeout(timer); // Nettoyage
    }, []);
    if(waiting){
      return (
        <Loading />
      )
    }else{
  return (
    <div className='h-full w-full'>
      <h1 className='text-4xl text-center lg:text-start p-4 font-semibold'>Transactions</h1>
      <Separator />
      <Card className='m-2'>

        <CardContent className='flex flex-col justify-evenly h-full'>
          <Transactions array={allTransactions} /> {/* Je sais pas pourquoi j'ai cette erreur là ...  */}

          {/* Ok ça fonctionne bien mtn, c'était juste le extends dans le fichier 'transactions.tsx' qui posait problème */}
        </CardContent>
      </Card>
    </div>
  )
}
}

export default TransactionsPage
