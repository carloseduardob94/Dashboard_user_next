"use client";

import { Activity, ChevronsUpDown, FileCheck, Headset, Settings, User } from "lucide-react";
import MenuItem from "./menu-item";

interface SidebarProps {
  collapsed: boolean;
}


const Sidebar = ({ collapsed }: SidebarProps) => {
  const menuItems = [
    { title: "Dashboard", icon: Activity },
    { title: "Usuários", icon: User },
    { title: "Documentos", icon: FileCheck },
  ];

  return (
    <aside className={`border-r border-border flex flex-col bg-muted/40 transition-all duration-300 ${collapsed ? "w-16" : "w-60"} font-inter`}>

      <div className={`h-[72px] border-b border-border pt-6`}>
        {!collapsed ? (
          <span className="text-white px-[34px] py-[8.5px] bg-black rounded-xl ml-6 text-xs font-bold font-inter">Logo</span>

        ) : (
          <div className="w-full flex justify-center p-0">
            <span className="text-white px-3 py-2 bg-black rounded-xl text-xs font-bold font-inter text-center">L</span>
          </div>
        )}
      </div>

      <div className="w-full p-4 flex flex-col">
        {!collapsed && (
          <div className="flex items-center justify-between pr-4">
            <div className="flex items-center gap-3">
              <span className="bg-accent text-xs w-8 h-8 rounded-lg font-semibold flex justify-center items-center">FA</span>
              <p className="font-semibold text-sm">Filial A</p>
            </div>

            <ChevronsUpDown className="w-4 h-4" />
          </div>
        )}

        {!collapsed && (
          <h4 className="text-xs text-[#3F3F46]/70 my-6">Menu</h4>
        )}

        <div className="flex flex-col space-y-2">
          {menuItems.map((item) => (
            <MenuItem key={item.title} title={item.title} icon={item.icon} collapsed={collapsed} />
          ))}
        </div>

        {!collapsed && <h4 className="text-xs text-[#3F3F46]/70 my-6">Configurações</h4>}

        <div className="flex flex-col space-y-2">
          <MenuItem title="Geral" icon={Settings} collapsed={collapsed} />
        </div>

      </div>

      <div className={`bg-white flex items-center mx-auto rounded-3xl py-[10px] px-4 mt-auto mb-4 cursor-pointer ${collapsed ? "" : "justify-between w-52"}`}>
        {collapsed ? (
          <Headset className="w-4 h-4 " />

        ) : (
          <>
            <span className="text-sm">Precisa de ajuda?</span>
            <Headset className="w-4 h-4" />
          </>
        )}
      </div>

    </aside>
  )
}

export default Sidebar;