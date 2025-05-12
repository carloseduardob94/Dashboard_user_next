"use client"

import { useState } from "react"
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Checkbox } from "./ui/checkbox"
import { Switch } from "./ui/switch"
import { Plus, X } from "lucide-react"
import { useUsersFirebase } from "@/hooks/useUsersFirebase"
import { getCurrentDate, getCurrentTime, getRandomAge, getRandomDuration, inferGender } from "@/lib/utils"

export function AddUserForm() {
  const [isOpen, setIsOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: false,
    cpf: "",
    rg: "",
    email2: "",
    status: true
  })

  const { addUser } = useUsersFirebase()

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const userToSave = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      whatsapp: formData.whatsapp,
      cpf: formData.cpf.replace(/\D/g, ""), // apenas números
      rg: formData.rg.trim(),
      email2: formData.email2.trim(),
      status: formData.status ? "Ativo" : "Inativo"
    }

    await addUser({
      ...userToSave,
      age: getRandomAge(),
      gender: inferGender(formData.name),
      date: getCurrentDate(),
      time: getCurrentTime(),
      duration: getRandomDuration(),
      userType: "Usuário padrão",
    })
    setIsOpen(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      whatsapp: false,
      cpf: "",
      rg: "",
      email2: "",
      status: true
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-28 h-10 rounded-full font-normal">
          <Plus className="w-4 h-4 mr-1" /> Adicionar
        </Button>
      </DialogTrigger>

      <DialogContent className="fixed inset-y-0 right-0 h-full w-full max-w-[40%] rounded-none border-l bg-white shadow-lg animate-in slide-in-from-right z-50 overflow-y-auto">
        <div className="flex justify-between items-center p-6">
          <DialogTitle className="text-2xl font-normal font-noto">Adicionar usuário</DialogTitle>
          <DialogClose asChild>
            <Button variant="outline" className="rounded-full" size="icon">
              <X className="w-5 h-5" />
            </Button>
          </DialogClose>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-6 pb-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input id="name" value={formData.name} onChange={e => handleChange("name", e.target.value)} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" value={formData.email} onChange={e => handleChange("email", e.target.value)} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" value={formData.phone} onChange={e => handleChange("phone", e.target.value)} />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="whatsapp"
                checked={formData.whatsapp}
                onCheckedChange={() => handleChange("whatsapp", !formData.whatsapp)}
              />
              <Label htmlFor="whatsapp">WhatsApp</Label>
            </div>
          </div>


          <div className="flex gap-4">
            <div className="space-y-2 w-full">
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                value={formData.cpf}
                inputMode="numeric"
                pattern="[0-9]*"
                onChange={e => handleChange("cpf", e.target.value)}
              />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="rg">RG</Label>
              <Input id="rg" value={formData.rg} onChange={e => handleChange("rg", e.target.value)} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email2">E-mail 2</Label>
            <Input id="email2" value={formData.email2} onChange={e => handleChange("email2", e.target.value)} />
          </div>


          <div className="flex items-center justify-between border rounded-lg p-4 bg-primary-foreground mt-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="status">Status</Label>
              <span className="text-sm text-muted-foreground">Defina se o usuário estará ativo ao ser adicionado.</span>

            </div>
            <div className="flex items-center gap-2">
              <Switch
                id="status"
                checked={formData.status}
                onCheckedChange={() => handleChange("status", !formData.status)}
              />
              <span className="text-sm font-medium">{formData.status ? "Ativo" : "Inativo"}</span>
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
  )
}
