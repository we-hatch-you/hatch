import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_DATA = [
  {
    question: "How do I earn Hatch AI Credits?",
    answer:
      "Simply use your Hatch Card for any everyday purchase, exactly like a normal credit card. No manual conversions required. For every $1 you spend anywhere, we automatically generate and vault 100 Hatch AI Credits for you.",
  },
  {
    question: "Which AI platforms can I use my credits on?",
    answer:
      "Hatch Cards natively integrates with all major LLM providers including OpenAI (ChatGPT/API), Anthropic (Claude), Google Gemini, and NVIDIA compute layers. You select where your compute goes.",
  },
  {
    question: "Is there a limit to how many credits I can earn?",
    answer:
      "There are no limits to the intelligence you can build. Your compute generation scales infinitely and directly with your organizational or personal spend.",
  },
  {
    question: "Do I need to juggle API keys or manage limits directly?",
    answer:
      "No. We completely abstract away the API layer. We manage the provisioning natively—you just watch your token balances go up every time you buy coffee or pay for software.",
  },
];

export default function Faq() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-center animate-in fade-in slide-in-from-top-10 duration-1000 delay-100 ease-in-out fill-mode-both">

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center max-w-lg">
            Frequently Asked Questions
          </h2>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full flex flex-col gap-6">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className={cn(
                  "p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                  index === 0 && "delay-100",
                  index === 1 && "delay-200",
                  index === 2 && "delay-300",
                  index === 3 && "delay-400",
                  index === 4 && "delay-500",
                )}
              >
                <AccordionTrigger className="p-0 text-xl font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer">
                  {faq.question}
                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="p-0 text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
