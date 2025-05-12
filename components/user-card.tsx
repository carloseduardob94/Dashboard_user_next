import { Button } from "@/components/ui/button";
import { Clock3, EllipsisVertical, Pencil, Tag, Trash2, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

interface UserCardProps {
  name: string;
  age: number;
  gender: string;
  date: string;
  time: string;
  duration: string;
  userType: string;
  status: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function UserCard({
  name,
  age,
  gender,
  date,
  time,
  duration,
  userType,
  status = "Ativo",
  onEdit,
  onDelete,
}: UserCardProps) {
  const initials = (() => {
    const parts = name.trim().split(" ");
    const first = parts[0]?.[0] || "";
    const last = parts[parts.length - 1]?.[0] || "";
    return (first + last).toUpperCase();
  })();

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border rounded-lg">
      <div className="flex items-center gap-3">
        {/* Iniciais */}
        <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-base font-medium text-primary">
          {initials}
        </div>

        <div className="flex flex-col">
          <div className="flex gap-3 mb-2">
            <p className="text-sm font-medium">{name}</p>
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              <User className="w-3 h-3" />
              {age} anos, {gender}
            </p>
          </div>
          <div className="text-xs text-muted-foreground flex items-center gap-3">
            <span>{date} -</span>
            <span>{time} </span>
            <div className="flex items-center gap-1">
              <Clock3 className="w-3 h-3" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="w-3 h-3" />
              <span className="text-xs text-muted-foreground">{userType}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          className={`h-5 px-3 text-xs font-semibold rounded-xl cursor-default ${status === "Ativo"
            ? "text-secondary-foreground bg-secondary border-0"
            : "text-muted-foreground border"
            }`}
        >
          {status}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="rounded-full p-3">
              <EllipsisVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onEdit} className="cursor-pointer">
              <Pencil className="w-4 h-4 mr-2" />
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onDelete} className="cursor-pointer text-red-600">
              <Trash2 className="w-4 h-4 mr-2" />
              Deletar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}