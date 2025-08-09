import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { assets } from '@/lib/fake-data';
import clsx from 'clsx';

const Assets = () => {
    
    return (
    <>
        {assets.map(({title, asset, devise, badge}) => {
            const IconComponent = badge.icon;
            const data = badge.data;
            return (
                <div className="relative" key={`${title}`}>
                <Card className="relative w-full h-60">
                    <CardHeader>
                    <CardDescription>
                        Total {title}
                    </CardDescription>
                    <CardTitle className="text-primary text-2xl xl:text-3xl transition-all">{asset.euro} {devise.euro}</CardTitle>
                    <CardDescription>{asset.crypto} {devise.crypto}</CardDescription>
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
        )
        })}
        
    </>
    )
}

export default Assets