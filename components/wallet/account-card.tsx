import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { totalAssets } from '@/lib/fake-data'
import { ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const AccountCard = () => {
  return (
    <Card className='h-full w-full bg-gradient-to-tr from-amber-200 to-fuchsia-300 border-0 shadow-xl gap-0 px-6'>
      <CardHeader className='h-1/2 lg:h-2/3 flex flex-col justify-center items-center'>
        <CardDescription className='text-black text-xs'>Solde du Compte Actuel</CardDescription>
        <CardTitle className='text-4xl md:text-5xl text-black'>{totalAssets.asset} {totalAssets.devise}</CardTitle>
        <CardAction className='mx-auto'>
          <div className='w-max px-3 h-6 bg-white rounded-3xl flex text-[9px] sm:text-xs items-center justify-center gap-1'><span>Par rapport au mois dernier : </span><totalAssets.badge.icon className='w-4 h-4' />{totalAssets.badge.data}</div>
        </CardAction>
      </CardHeader>
      <CardContent className='flex-1 py-4 h-full'>
        <div className='bg-white w-full sm:w-[250px] h-16 xl:w-2/3 rounded-3xl mx-auto shadow-md'>
          <Button className='h-full w-full'><ArrowUpDown /></Button> {/* Jsp pq la taille fonctionne pas pour cette icone */}
        </div>
      </CardContent>
    </Card>
  )
}

export default AccountCard
