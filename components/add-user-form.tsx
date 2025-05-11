"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";

export function AddUserForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWhatsapp, setIsWhatsapp] = useState(true);
  const [isActive, setIsActive] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-28 h-10 rounded-full font-normal">+ Adicionar</Button>
      </DialogTrigger>

      <DialogContent className="fixed inset-y-0 right-0 h-full w-full max-w-[40%] rounded-none border-l bg-white shadow-lg animate-in slide-in-from-right z-50 overflow-y-auto" >
        <div className="flex justify-between items-center pt-10 px-10">
          <DialogTitle className="text-2xl font-normal font-noto">Adicionar usuário</DialogTitle>
          <DialogClose asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <X className="w-4 h-4" />
            </Button>
          </DialogClose>
        </div>

        <form className="flex flex-col gap-5 p-10">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input id="name" placeholder="Digite o nome" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" placeholder="Digite o e-mail" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" placeholder="Informe o telefone" />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="whatsapp"
                checked={isWhatsapp}
                onCheckedChange={() => setIsWhatsapp(!isWhatsapp)}
              />
              <Label htmlFor="whatsapp">WhatsApp</Label>
            </div>
          </div>


          <div className="flex gap-4">
            <div className="space-y-2 w-full">
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" placeholder="Informe o CPF" />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="rg">RG</Label>
              <Input id="rg" placeholder="Informe o RG" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email2">E-mail</Label>
            <Input id="email2" placeholder="Digite o e-mail" />
          </div>

          <div className="flex items-center justify-between space-y-2 p-4 bg-primary-foreground border border-border rounded-2xl">
            <div className="flex flex-col gap-2">
              <Label htmlFor="status">Status</Label>
              <span className="text-xs text-muted-foreground">Defina se o usuário estará ativo ao ser adicionado.</span>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="status" checked={isActive} onCheckedChange={() => setIsActive(!isActive)} />
              <span className="text-sm font-medium">{isActive ? "Ativo" : "Inativo"}</span>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-auto">
            <DialogClose asChild>
              <Button className="rounded-full" variant="outline">Cancelar</Button>
            </DialogClose>
            <Button className="rounded-full" type="submit">Adicionar</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
