import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UserCard from "@/components/user-card";
import UserStatCard from "@/components/user-stat-card";
import { users } from "@/data/users";
import { ListFilter, Plus } from "lucide-react";

export default function UserPage() {
  const userStats = [
    { title: "Usuários", value: "294" },
    { title: "Tempo de sessão", value: "31m 20s" },
    { title: "Ativos", value: "203" },
    { title: "Inativos", value: "127" },
  ]

  return (
    <div className="w-full p-10 font-inter">
      {/* Header da página */}
      <div className="container flex flex-col w-full space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-noto text-foreground">Usuários</h1>
          <Button className="w-28 h-10 rounded-full font-normal"><Plus className="w-4 h-4" /> Adicionar</Button>
        </div>

        {/* Cards de info (Usuários, Tempo, Ativos, Inativos) */}
        <div className="flex flex-wrap justify-around gap-5">
          {userStats.map((item, index) => (
            <UserStatCard key={index} title={item.title} value={item.value} />
          ))}
        </div>

        {/* Campo de busca e filtro */}
        <div className="w-full flex items-center gap-2">
          <Input placeholder="Buscar..." className="w-full" />
          <Button variant="outline" className="rounded-full" size="icon"><ListFilter /></Button>
        </div>

        {/* Lista de usuários */}
        <div className="space-y-2">
          {users.map((item, index) => (
            <UserCard
              key={index}
              name={item.name}
              age={item.age}
              date={item.date}
              time={item.time}
              duration={item.duration}
              gender={item.gender}
              userType={item.userType}
              status={item.status}
            />
          ))}
        </div>

        {/* Rodapé: paginação */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>5 de 294 itens</span>
          <div className="flex items-center gap-4">
            {/* <Pagination /> */}
            {/* <SelectItensPerPage /> */}
          </div>
        </div>
      </div>
    </div>

  )
}