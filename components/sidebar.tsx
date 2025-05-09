"use client";

import { Activity, ChevronsUpDown, FileCheck, Headset, Settings, User } from "lucide-react";
import MenuItem from "./menu-item";

const Sidebar = () => {
  const menuItems = [
    { title: "Dashboard", icon: Activity },
    { title: "Usuários", icon: User },
    { title: "Documentos", icon: FileCheck },
  ];

  return (
    <aside className="border-r border-border w-60 pt-6 h-screen flex flex-col bg-muted/40">
      <div className="pb-5 border-b border-border">
        <span className="text-white px-[34px] py-[8.5px] bg-black rounded-xl ml-6 text-xs font-bold font-inter">Logo</span>
      </div>

      <div className="w-full p-4 flex flex-col">
        <div className="flex items-center justify-between pr-4">
          <div className="flex items-center gap-3">
            <span className="bg-accent text-xs w-8 h-8 rounded-lg font-semibold flex justify-center items-center">FA</span>
            <p className="font-semibold text-sm">Filial A</p>
          </div>

          <ChevronsUpDown className="w-4 h-4" />
        </div>


        <h4 className="text-xs text-[#3F3F46]/70 my-6">Menu</h4>

        {menuItems.map((item) => (
          <MenuItem key={item.title} title={item.title} icon={item.icon} />
        ))}

        <h4 className="text-xs text-[#3F3F46]/70 my-6">Configurações</h4>

        <MenuItem title="Geral" icon={Settings} />

      </div>


      <div className="bg-white flex justify-between items-center mx-auto w-52 rounded-3xl py-[10px] px-4 mt-auto mb-4 cursor-pointer">
        <span className="text-sm">Precisa de ajuda?</span>
        <Headset className="w-4 h-4" />
      </div>

    </aside>
  )
}

export default Sidebar;