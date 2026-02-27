import { Accordion } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import type { FaqItem } from "@/types/database";

interface FaqProps {
  items?: FaqItem[];
}

const defaultItems: FaqItem[] = [
  { id: "1", question: "What is Superteam Malaysia?", answer: "Superteam Malaysia is the Malaysian chapter of Superteam — a global network of the most talented people in crypto working to accelerate the Solana ecosystem.", sort_order: 1, visible: true, created_at: "" },
  { id: "2", question: "How do I join?", answer: "Join our Discord server and introduce yourself! We welcome developers, designers, community builders, and anyone passionate about Solana and Web3.", sort_order: 2, visible: true, created_at: "" },
  { id: "3", question: "Do I need to know Solana to participate?", answer: "Not at all! We have educational programs for all levels. Whether you're a complete beginner or an experienced developer, there's a place for you.", sort_order: 3, visible: true, created_at: "" },
  { id: "4", question: "Are events free?", answer: "Most of our community events are free. Some specialized workshops or hackathons may have a small fee to cover venue costs.", sort_order: 4, visible: true, created_at: "" },
  { id: "5", question: "How can I get a grant?", answer: "Check out our grants section or reach out on Discord. We can help you navigate the Solana ecosystem grant opportunities and connect you with the right programs.", sort_order: 5, visible: true, created_at: "" },
];

export function Faq({ items = defaultItems }: FaqProps) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/50 text-lg">
              Everything you need to know about Superteam Malaysia.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion items={items} />
        </ScrollReveal>
      </div>
    </section>
  );
}
