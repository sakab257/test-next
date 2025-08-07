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

const Assets = () => {
    
    return (
    <>
        {assets.map(({title, asset, devise, badge}) => {
            const IconComponent = badge.icon;
            return (
            <div className="w-xs mx-auto py-6 px-4">
                <div className="relative">
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
                        {badge.data}
                    </Badge>
                    <p className="text-xs text-muted-foreground">Par rapport au mois dernier</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
        )
        })};
        
    </>
    )
}

export default Assets