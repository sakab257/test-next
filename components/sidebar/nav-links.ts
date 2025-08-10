import { Grid2x2,
  WalletMinimal,
  ChartLine,
  FileText,
  CircleDollarSign,
  ChartPie,
  Settings,
  Info,
  ArrowLeftRight
} from "lucide-react"

export const general = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Grid2x2,
  },
  {
    title: "Portefeuille",
    url: "/wallet",
    icon: WalletMinimal,
  },
  {
    title: "Statistiques",
    url: "/stats",
    icon: ChartLine,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: ArrowLeftRight,
  },
  {
    title: "Investissements",
    url: "/placements",
    icon: CircleDollarSign,
  },
  {
    title: "Factures",
    url: "/invoices",
    icon: FileText,
  },
  {
    title: "Rapports",
    url: "/reports",
    icon: ChartPie,
  },
]

export const help = [
  {
    title: "Paramètres",
    url: "#",
    icon: Settings,
  },
  {
    title: "Aide & Informations",
    url: "#",
    icon: Info,
  },
]
