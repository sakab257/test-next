"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {sndChartData, sndChartConfig} from '@/lib/fake-data'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "An interactive area chart"

export function BarChartInteractive() {

  const [timeRange, setTimeRange] = React.useState("90d")
  const [device, setDevice] = React.useState('mobile')

  const filteredData = [sndChartData.filter((item) => {
      const date = new Date(item.date)
      const referenceDate = new Date("2024-06-30")
      let daysToSubtract = 90
      if (timeRange === "30d") {
        daysToSubtract = 30
      } else if (timeRange === "7d") {
        daysToSubtract = 7
      }
      const startDate = new Date(referenceDate)
      startDate.setDate(startDate.getDate() - daysToSubtract)
      return date >= startDate
    }),
    // sndChartData.filter((item) => {
    //   return item.device === device
    // })

  ]

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Visiteurs</CardTitle>
          <CardDescription>
            Total des visiteurs ces 3 derniers mois
          </CardDescription>
        </div>
        <Select value={device} onValueChange={setDevice}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex cursor-pointer"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Mobile" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="mobile" className="rounded-lg cursor-pointer hover:bg-accent">
              Mobile
            </SelectItem>
            <SelectItem value="pc" className="rounded-lg cursor-pointer hover:bg-accent">
              PC
            </SelectItem>
          </SelectContent>
        </Select>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex cursor-pointer"
            aria-label="Select a value"
          >
            <SelectValue placeholder="3 derniers mois" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg cursor-pointer hover:bg-accent">
              3 derniers mois
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg cursor-pointer hover:bg-accent">
              30 derniers jours
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg cursor-pointer hover:bg-accent">
              7 derniers jours
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={sndChartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart data={filteredData[0]}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Bar
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Bar
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
