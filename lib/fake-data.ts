import { ChartConfig } from "@/components/ui/chart";

import {TrendingUp, TrendingDown } from 'lucide-react';

export const chartConfig = {
  placement: {
    label: "Euros",
    color: "var(--validate)",
  },
} satisfies ChartConfig

export const chartData = [
  { month: "Janvier", placement: 23756 },
  { month: "Fevrier", placement: 12678 },
  { month: "Mars", placement: 7643 },
  { month: "Avril", placement: 14589 },
  { month: "Mai", placement: 25637 },
  { month: "Jun", placement: 13564 },
  { month: "Jul", placement: 21978 },
  { month: "Aug", placement: 35257 },
  { month: "Sep", placement: 54976 },
  { month: "Oct", placement: 42013 },
  { month: "Nov", placement: 46790 },
  { month: "Dec", placement: 32866 },
]

export const totalAssets ={
    title:'Portefeuille',
    asset:32866.92,
    devise:'€',
    badge:{
      icon:TrendingDown ,
      data:'- 2,74%'
    }
};

export const assets =[
{
  title:'Bitcoin',
  asset:{
    euro: 12459.76,
    crypto:0.12
  },
  devise:{
    euro:'€',
    crypto:'BTC'
  },
  badge:{
      icon:TrendingUp ,
      data:'+ 3,86%'
    }

},
{
  title:'Ethereum',
  asset:{
    euro: 10764.67,
    crypto:3.24
  },
  devise:{
    euro:'€',
    crypto:'ETH'
  },
  badge:{
      icon:TrendingUp,
      data:'+ 5,39%'
    }

},
{
  title:'Solana',
  asset:{
    euro: 9642.49,
    crypto:65
  },
  devise:{
    euro:'€',
    crypto:'SOL'
  },
  badge:{
      icon:TrendingDown ,
      data:'- 1,42%'
    }

}


];