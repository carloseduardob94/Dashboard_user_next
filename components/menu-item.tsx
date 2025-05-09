"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon: LucideIcon;
}

export default function MenuItem({ title, icon: Icon }: MenuItemProps) {

  const isActive = "Usuários" === title

  return (
    <Link href="/"
      className={`w-full flex items-center px-3 py-2 rounded-full transition mb-1 ${isActive ? "bg-primary text-white" : "hover:bg-primary-foreground text-muted-foreground"
        }`}
    >
      <Icon className="w-4 h-4 mr-3" />
      <span className={`text-sm`}>{title}</span>
    </Link>
  )
}