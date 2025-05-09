"use client";

import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon: LucideIcon;
  collapsed: boolean;
}

export default function MenuItem({ title, icon: Icon, collapsed }: MenuItemProps) {

  const isActive = "Usuários" === title

  return (
    <Link
      href="/"
      className={clsx(
        "flex items-center rounded-full transition",
        collapsed ? "justify-center w-10 h-10" : "w-full px-3 py-2",
        isActive ? "bg-primary text-white" : "hover:bg-primary-foreground text-muted-foreground"
      )}
    >
      <Icon
        className={clsx(
          "w-4 h-4",
          !collapsed && "mr-3",
          isActive ? "text-white" : "text-muted-foreground"
        )}
      />
      {!collapsed && (
        <span className="text-sm">{title}</span>
      )}
    </Link>
  )
}