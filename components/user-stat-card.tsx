import clsx from "clsx";

interface UserStatCardProps {
  title: string;
  value: string;
  className?: string;
}

export default function UserStatCard({ title, value, className }: UserStatCardProps) {

  return (
    <div className={clsx("h-24 p-6 bg-primary-foreground rounded-lg",
      "w-full max-w-[14rem]",
      className)}>
      <div className="w-full flex flex-col">
        <span className="text-muted-foreground text-xs">{title}</span>
        <h2 className="text-3xl font-noto">{value}</h2>
      </div>
    </div>
  )
}