import { CreditCard, ShoppingCart, Landmark } from "lucide-react";
import AssistanceCard from "./AssistanceCard";

const programs = [
  {
    icon: CreditCard,
    iconColor: "text-primary",
    iconBgColor: "bg-primary/10",
    title: "Credit Card Assistance & Relief Options",
    description: "Many adults are struggling with high interest rates and rising monthly payments. Credit card assistance programs may help reduce interest, consolidate balances, or make payments more manageable.",
    bulletPoints: [
      "Help lowering monthly payments",
      "Assistance for high-interest credit cards",
      "Options available even with existing balances",
    ],
    eligibilityNote: "Adults carrying credit card debt or experiencing financial stress.",
    ctaText: "See If You Qualify",
    ctaLink: "https://glctrk.org/aff_c?offer_id=2301&aff_id=21664",
  },
  {
    icon: ShoppingCart,
    iconColor: "text-success-green",
    iconBgColor: "bg-accent",
    title: "Food Stamp & Grocery Assistance",
    description: "Food assistance programs help individuals and families afford groceries during times of financial hardship. Many working adults qualify without realizing it.",
    bulletPoints: [
      "Monthly grocery support",
      "Available to individuals and families",
      "Helps offset rising food costs",
    ],
    eligibilityNote: "Households struggling with grocery expenses.",
    ctaText: "Check Grocery Assistance",
    ctaLink: "https://trkfy.org/aff_c?offer_id=2302&aff_id=21664",
  },
  {
    icon: Landmark,
    iconColor: "text-support-teal",
    iconBgColor: "bg-secondary",
    title: "Social Security & Income Support Programs",
    description: "Social Security programs provide income support for retirement, disability, or other qualifying situations. Some adults qualify earlier than expected.",
    bulletPoints: [
      "Retirement income planning",
      "Disability or income assistance",
      "Long-term financial stability support",
    ],
    eligibilityNote: "Adults planning ahead or needing income support.",
    ctaText: "Start Application",
    ctaLink: "https://trkfy.org/aff_c?offer_id=3224&aff_id=21664",
  },
];

const AssistancePrograms = () => {
  return (
    <section id="assistance-programs" className="bg-background px-4 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
            Available Assistance Programs
          </h2>
          <p className="text-muted-foreground">
            Select a program below to check your eligibility
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
          {programs.map((program, index) => (
            <AssistanceCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssistancePrograms;