import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {TrendingUp } from 'lucide-react'

import React from 'react'
import { Badge } from "../ui/badge";

const TotalAssets = () => {
  return (
    <div className="w-xs mx-auto py-6 px-4">
      <div className="relative">

        {/* Main card */}
        <Card className="relative w-full">
          <CardHeader>
            <CardDescription>
              Total
            </CardDescription>
            <CardTitle className="text-primary text-4xl">30,000.00 €</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between mt-10">
            <Badge>
                <TrendingUp />
                + 2,74%
            </Badge>
            <p className="text-xs text-muted-foreground">Par rapport au mois dernier</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default TotalAssets