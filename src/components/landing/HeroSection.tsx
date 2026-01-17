import { Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient px-4 py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
      </div>
      
      <div className="relative mx-auto max-w-2xl text-center">
        {/* Trust badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground backdrop-blur-sm">
          <Shield className="h-4 w-4" />
          <span>Trusted by thousands of Americans</span>
        </div>
        
        {/* Headline */}
        <h1 className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          You May Qualify for Financial Assistance Programs Today
        </h1>
        
        {/* Subheadline */}
        <p className="mb-8 text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
          Millions of Americans miss out on financial help every year. See which assistance programs you may be eligible for by completing a short form with real, accurate information.
        </p>
        
        {/* Trust indicators */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/80">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" />
            <span>Free to apply</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" />
            <span>Takes 2-3 minutes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4" />
            <span>Secure & private</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <Button 
          variant="secondary" 
          size="xl" 
          className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated"
          onClick={() => document.getElementById('assistance-programs')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Check Eligibility Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;