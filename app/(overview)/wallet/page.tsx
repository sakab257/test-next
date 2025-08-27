import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import AccountCard from '@/components/wallet/account-card'

const page = () => {
  return (
    <>
      <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2'>
        <div className='w-full h-full grid grid-rows-2'>
          <div className='w-full h-full p-4'>
            <AccountCard />
          </div>
          <div className='w-full h-full p-4'>
            <Card className='h-full w-full bg-gradient-to-r from-accent to-sidebar-ring border-0 shadow-xl'>
              <CardHeader>
                <CardTitle>Test</CardTitle>
                <CardDescription>tttest</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
        </div>
        <div className='w-full h-full p-4'>
          <Card className='h-full w-full bg-gradient-to-r from-accent to-sidebar-ring border-0 shadow-xl'>
              <CardHeader>
                <CardTitle>Test</CardTitle>
                <CardDescription>tttest</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter></CardFooter>
            </Card>
        </div>
      </div>
    </>
  )
}

export default page
