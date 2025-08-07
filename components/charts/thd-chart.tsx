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

const TIME_RANGES = {
  "90d": { days: 90, label: "3 derniers mois" },
  "30d": { days: 30, label: "30 derniers jours" },
  "7d": { days: 7, label: "7 derniers jours" }
} as const

const DEVICES = {
  mobile: "Mobile",
  desktop: "PC"
} as const

const REFERENCE_DATE = "2024-06-30"

type TimeRange = keyof typeof TIME_RANGES
type Device = keyof typeof DEVICES

export function BarChartInteractive() {
  const [timeRange, setTimeRange] = React.useState<TimeRange>("90d")
  const [device, setDevice] = React.useState<Device>('mobile')

  const filteredData = React.useMemo(() => {
    const filterByTimeRange = (data: typeof sndChartData) => {
      const referenceDate = new Date(REFERENCE_DATE)
      const daysToSubtract = TIME_RANGES[timeRange].days
      const startDate = new Date(referenceDate)
      startDate.setDate(startDate.getDate() - daysToSubtract)
      
      return data.filter(item => new Date(item.date) >= startDate)
    }

    const transformForDevice = (data: typeof sndChartData) => {
      return data.map(item => ({
        date: item.date,
        [device]: item[device],
        total: item.desktop + item.mobile
      }))
    }

    return transformForDevice(filterByTimeRange(sndChartData))
  }, [timeRange, device])

  return (
    <Card className="pt-0 w-2/3 h-max m-5">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Visiteurs</CardTitle>
          <CardDescription>
            Total des visiteurs ces 3 derniers mois
          </CardDescription>
        </div>
        <Select value={device} onValueChange={(value) => setDevice(value as Device)}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex cursor-pointer"
            aria-label="Sélectionner un appareil"
          >
            <SelectValue placeholder={DEVICES[device]} />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            {Object.entries(DEVICES).map(([key, label]) => (
              <SelectItem 
                key={key}
                value={key} 
                className="rounded-lg cursor-pointer hover:bg-accent"
              >
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={timeRange} onValueChange={(value) => setTimeRange(value as TimeRange)}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex cursor-pointer"
            aria-label="Sélectionner une période"
          >
            <SelectValue placeholder={TIME_RANGES[timeRange].label} />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            {Object.entries(TIME_RANGES).map(([key, { label }]) => (
              <SelectItem 
                key={key}
                value={key} 
                className="rounded-lg cursor-pointer hover:bg-accent"
              >
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={sndChartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart data={filteredData}>
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
            {device === 'mobile' ? (
              <Bar
                dataKey="mobile"
                type="natural"
                fill="url(#fillMobile)"
                stroke="var(--color-mobile)"
              />
            ) : (
              <Bar
                dataKey="desktop"
                type="natural"
                fill="url(#fillDesktop)"
                stroke="var(--color-desktop)"
              />
            )}
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
