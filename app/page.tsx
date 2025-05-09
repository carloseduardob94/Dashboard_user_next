"use client";

import Header from "@/components/header";
import Image from "next/image";
import UserPage from "./users/page";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

export default function Home() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <main className="flex h-screen">
      <Sidebar collapsed={collapsed} />

      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={() => setCollapsed((prev) => !prev)} />

        <div className="flex-1 overflow-auto">
          <UserPage />
        </div>
      </div>
    </main>
  );
}
