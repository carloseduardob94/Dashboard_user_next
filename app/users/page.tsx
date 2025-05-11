"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import UserCard from "@/components/user-card";
import UserStatCard from "@/components/user-stat-card";
import { users } from "@/data/users";
import { paginationItems } from "@/lib/utils";
import { ListFilter, Plus } from "lucide-react";
import { useState } from "react";


export default function UserPage() {
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const totalPages = Math.ceil(users.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const currentUsers = users.slice(startIndex, startIndex + itemsPerPage)

  console.log(currentUsers)

  const getPaginationItems: Array<number | string> = paginationItems(page, totalPages)

  const userStats = [
    { title: "Usuários", value: "294" },
    { title: "Tempo de sessão", value: "31m 20s" },
    { title: "Ativos", value: "203" },
    { title: "Inativos", value: "127" },
  ]

  return (
    <div className="w-full font-inter p-10">
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
        <div className="flex flex-col gap-2 overflow-y-auto">
          {currentUsers.map((item, index) => (
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
          <span>{startIndex + 1} - {startIndex + currentUsers.length} de {users.length} usuários</span>
          <div className="flex items-center gap-4">
            {/* <Pagination /> */}
            {/* <SelectItensPerPage /> */}

            <Pagination>
              <PaginationContent className="gap-1">
                <PaginationItem>
                  <PaginationPrevious onClick={() => page > 1 && setPage(page - 1)} className="cursor-pointer" >

                  </PaginationPrevious>
                </PaginationItem>

                {getPaginationItems.map((item, i) => (
                  <PaginationItem key={i}>
                    {item === "..." ? (
                      <PaginationEllipsis />
                    ) : (
                      <Button
                        variant={page === item ? "default" : "outline"}
                        size="sm"
                        className="h-8 px-3"
                        onClick={() => setPage(Number(item))}
                      >
                        {item}
                      </Button>
                    )}
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => page < totalPages && setPage(page + 1)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span>Itens por página</span>
            <Select
              value={String(itemsPerPage)}
              onValueChange={(value) => {
                setItemsPerPage(Number(value));
                setPage(1);
              }}
            >
              <SelectTrigger className="w-[80px] h-8 text-sm">
                <SelectValue placeholder="Itens" />
              </SelectTrigger>
              <SelectContent>
                {[10, 15, 20].map((num) => (
                  <SelectItem key={num} value={String(num)}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>

  )
}