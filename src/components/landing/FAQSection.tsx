import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this a government website?",
    answer: "No. This website is not a government agency. We help connect individuals with information and application options for financial assistance programs. Eligibility and availability vary by individual situation.",
  },
  {
    question: "Does it cost anything to apply?",
    answer: "No. Checking eligibility and completing the application form does not require any upfront payment.",
  },
  {
    question: "Do I need to provide real information?",
    answer: "Yes. Providing real and accurate information is important to properly determine eligibility and avoid delays or disqualification.",
  },
  {
    question: "How long does the application take?",
    answer: "Most forms take only a few minutes to complete. Having your basic personal and financial information ready can help speed up the process.",
  },
  {
    question: "Who can apply for these programs?",
    answer: "These programs are generally available to adults 18 years and older, with many designed specifically for individuals 25 and up. Eligibility depends on factors such as income, household size, and financial situation.",
  },
  {
    question: "Will applying affect my credit score?",
    answer: "Completing an eligibility form does not automatically impact your credit score. Any credit-related outcomes depend on the specific assistance program and your individual circumstances.",
  },
  {
    question: "Is my information secure?",
    answer: "Yes. Your information is handled securely and used only for eligibility review and assistance-related purposes.",
  },
  {
    question: "How soon will I know if I qualify?",
    answer: "In many cases, eligibility results or next steps are provided shortly after submitting the form, though timing may vary depending on the program.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-background px-4 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about the application process
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="rounded-xl border border-border bg-card px-5 data-[state=open]:shadow-card"
            >
              <AccordionTrigger className="py-5 text-left font-display font-semibold text-foreground hover:no-underline [&[data-state=open]>svg]:rotate-180">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;