"use client"

import { Bar, BarChart, CartesianGrid, XAxis, LineChart, Line } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"

import { chartData, chartConfig } from "@/lib/fake-data"

export function Component() {
  return (
    <>
    <ChartContainer config={chartConfig} className="h-[350px]">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
      <ChartContainer config={chartConfig} className="h-[350px]">
        <LineChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartLegend content={<ChartLegendContent />} />
          <Line dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        </LineChart>
      </ChartContainer>
    </>
  )
}
