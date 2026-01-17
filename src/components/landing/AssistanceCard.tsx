import { LucideIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AssistanceCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  title: string;
  description: string;
  bulletPoints: string[];
  eligibilityNote: string;
  ctaText: string;
  ctaLink: string;
}

const AssistanceCard = ({
  icon: Icon,
  iconColor,
  iconBgColor,
  title,
  description,
  bulletPoints,
  eligibilityNote,
  ctaText,
  ctaLink,
}: AssistanceCardProps) => {
  return (
    <article className="rounded-2xl bg-card p-6 shadow-card border border-border/50 transition-all duration-300 hover:shadow-elevated hover:border-border">
      {/* Icon */}
      <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${iconBgColor}`}>
        <Icon className={`h-7 w-7 ${iconColor}`} />
      </div>
      
      {/* Title */}
      <h3 className="mb-3 font-display text-xl font-bold text-foreground md:text-2xl">
        {title}
      </h3>
      
      {/* Description */}
      <p className="mb-5 text-muted-foreground leading-relaxed">
        {description}
      </p>
      
      {/* Bullet Points */}
      <ul className="mb-5 space-y-2.5">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-3 text-foreground">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-support-teal" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      
      {/* Eligibility Note */}
      <p className="mb-6 rounded-lg bg-muted/50 px-4 py-3 text-sm text-muted-foreground italic">
        <strong className="not-italic font-medium text-foreground">Best for:</strong> {eligibilityNote}
      </p>
      
      {/* CTA Button */}
      <Button 
        variant="hero" 
        size="lg" 
        className="w-full"
        asChild
      >
        <a href={ctaLink} target="_blank" rel="noopener noreferrer">
          {ctaText}
        </a>
      </Button>
    </article>
  );
};

export default AssistanceCard;