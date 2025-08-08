import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Invoices from '../cards/invoices';

const LatestInvoices = () => {
  return (
    <>
        <Card className='mt-3 lg:mt-0'>
            <CardHeader>
                <CardTitle className='text-xl'>Dernières Transactions - 2025</CardTitle>
                <CardDescription>Jan - Dec</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col justify-evenly h-full gap-1'>
                <Invoices />
                <Invoices />
                <Invoices />
                <Invoices />
                <Invoices />
                <Invoices />
            </CardContent>
        </Card>
    </>
  )
}

export default LatestInvoices