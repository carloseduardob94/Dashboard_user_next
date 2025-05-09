import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderIconProps {
  icon: LucideIcon;
}

export default function HeaderIcon({ icon: Icon }: HeaderIconProps) {
  return (
    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full border border-border">
      <Icon className="w-4 h-4 text-[#18181B]" />
    </Button>
  );
}