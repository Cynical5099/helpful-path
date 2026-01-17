import { MousePointerClick, FileText, Search, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MousePointerClick,
    number: "1",
    title: "Choose a Program",
    description: "Select the assistance program you're interested in",
  },
  {
    icon: FileText,
    number: "2",
    title: "Complete the Form",
    description: "Fill out a short form using real and accurate information",
  },
  {
    icon: Search,
    number: "3",
    title: "Review Process",
    description: "Your information is reviewed for eligibility",
  },
  {
    icon: CheckCircle,
    number: "4",
    title: "Get Connected",
    description: "If eligible, you may be connected with available assistance options",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-section-alt px-4 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
            How to Apply
          </h2>
          <p className="text-muted-foreground">
            Getting started is simple and takes just a few minutes
          </p>
        </div>
        
        {/* Steps */}
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative flex items-start gap-4 rounded-xl bg-card p-5 shadow-card border border-border/50"
            >
              {/* Step Number with Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg">
                {step.number}
              </div>
              
              {/* Content */}
              <div>
                <h3 className="mb-1 font-display font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-10 text-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => document.getElementById('assistance-programs')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;