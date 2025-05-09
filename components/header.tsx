import { Bell, HelpCircle, PanelLeftClose } from "lucide-react";
import Sidebar from "./sidebar";
import HeaderIcon from "./header-icons";
import Image from "next/image";

export default function Header() {
  const headerIcons = [
    { icon: HelpCircle },
    { icon: Bell }
  ]
  return (
    <header className="w-full flex border-b border-border h-[69px]">
      <div className="flex-1 flex items-center pl-7 pr-4">
        <PanelLeftClose className="w-4 h-4" />

        <div className="ml-auto flex items-center justify-center gap-3">
          {headerIcons.map((item, index) => (
            <HeaderIcon key={index} icon={item.icon} />
          ))}

          <Image
            src="https://i.pravatar.cc/150?u=random"
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
    </header>
  )
}