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
import { Badge } from "../ui/badge";

const TotalAssets = () => {
  const {title, asset, devise, badge} = totalAssets;
  const {icon: IconComponent, data} = badge;
  return (
    <div className="w-xs mx-auto py-6 px-4">
      <div className="relative">

        {/* Main card */}
        <Card className="relative w-full">
          <CardHeader>
            <CardDescription>
              Total {title}
            </CardDescription>
            <CardTitle className="text-primary text-4xl">{asset} {devise}</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between mt-10">
            <Badge className="bg-validate">
                <IconComponent className="w-4 h-4 mr-1" />
                {data}
            </Badge>
            <p className="text-xs text-muted-foreground">Par rapport au mois dernier</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default TotalAssets