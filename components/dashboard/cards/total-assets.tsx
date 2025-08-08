import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {TrendingUp } from 'lucide-react'

import {totalAssets} from '@/lib/fake-data'

import React from 'react'
import { Badge } from "../../ui/badge";
import clsx from "clsx";

const TotalAssets = () => {
  const {title, asset, devise, badge} = totalAssets;
  const {icon: IconComponent, data} = badge;
  return (
    <div className="py-6 px-4">
      <div className="relative">
        {/* Main card */}
        <Card className="relative w-full h-60">
          <CardHeader>
            <CardDescription>
              Total {title}
            </CardDescription>
            <CardTitle className="text-primary text-2xl xl:text-3xl transition-all">{asset} {devise}</CardTitle>
          </CardHeader>
          <CardFooter className="flex flex-row justify-between lg:flex-col xl:flex-row lg:items-start xl:justify-between xl:items-center mt-auto lg:gap-1.5">
            <Badge className={clsx(
              {
               "bg-validate":data.includes("+")
              },
              {
               "bg-destructive":data.includes("-")
              }
              )}>
                <IconComponent className="w-4 h-4 mr-1" />
                {data}
            </Badge>
            <p className="text-[9px] 2xl:text-xs text-muted-foreground transition-all">Par rapport au mois dernier</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default TotalAssets