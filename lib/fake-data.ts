import { ChartConfig } from "@/components/ui/chart"

export const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "June", desktop: 158, mobile: 190 },
  { month: "Jul", desktop: 100, mobile: 250 },
  { month: "Aug", desktop: 214, mobile: 273 },
  { month: "Sep", desktop: 52, mobile: 143 },
  { month: "Oct", desktop: 243, mobile: 120 },
  { month: "Nov", desktop: 284, mobile: 140 },
  { month: "Dec", desktop: 214, mobile: 100 },
]