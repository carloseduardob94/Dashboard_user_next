import Header from "@/components/header";
import Image from "next/image";
import UserPage from "./users/page";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="flex-1 overflow-auto">
          <UserPage />
        </div>
      </div>
    </main>
  );
}
