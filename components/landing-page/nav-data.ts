import { ImageIcon, LayoutGrid, MessageSquare } from "lucide-react"
import type { SubNavItem } from "./nav-dropdown"
import { iconColors } from "./color-utils"

// Resources dropdown data
export const resourcesDropdownData: SubNavItem[][] = [
  [
    {
      title: "Foundation Bubble Template",
      description: "Start your Bubble project with our foundation template",
      href: "/",
      icon: LayoutGrid,
      color: iconColors.resources.blog,
      external: true,
    },
    {
      title: "Favicon Generator",
      description: "Convert your images to favicons",
      href: "/",
      icon: ImageIcon,
      color: iconColors.resources.tutorials,
      external: true,
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team",
      href: "/start",
      icon: MessageSquare,
      color: iconColors.resources.community,
      external: true,
    },
  ],
]
