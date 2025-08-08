'use client'
import React from 'react'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { chartConfig, chartData } from '@/lib/fake-data'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import { Separator } from '../../ui/separator'

export const DashboardChart = () => {
  return (
    <Card className='h-full'>
        <CardHeader>
            <CardTitle className='text-xl'>Investissements - 2025</CardTitle>
            <CardDescription>Jan - Dec</CardDescription>
        </CardHeader>
        <Separator/>
        <CardContent className='w-full'>
            <ChartContainer config={chartConfig} className='min-h-[200px] h-[200px] md:h-full w-full'>
                <LineChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0,3)}
                    />
                    <YAxis
                    dataKey="placement"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    domain={[0,60000]}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />}/>
                    <Line dataKey="placement" stroke="var(--color-placement)" strokeWidth={2} dot={false} />
                </LineChart>
            </ChartContainer>
        </CardContent>
    </Card>
  )
}