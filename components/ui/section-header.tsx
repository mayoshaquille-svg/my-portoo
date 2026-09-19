import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  id: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  id,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-3">
      <Badge variant="outline" className="w-fit">
        {eyebrow}
      </Badge>
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
