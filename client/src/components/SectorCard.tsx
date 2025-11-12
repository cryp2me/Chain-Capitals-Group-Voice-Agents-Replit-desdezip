import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SectorCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SectorCard = ({ icon: Icon, title, description }: SectorCardProps) => {
  return (
    <Card className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ai-blue to-ai-cyan flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default SectorCard;
