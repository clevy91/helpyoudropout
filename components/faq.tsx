"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is this?",
    answer: "Help You Dropout is a resource for young founders who want to leave traditional education to pursue entrepreneurship. We connect aspiring founders with successful entrepreneurs who've taken the same path."
  },
  {
    question: "Why drop out?",
    answer: "Some of the most successful companies in the world were started by dropouts. Sometimes the best education is building something real. This isn't for everyone, but for those with a clear vision and relentless drive, it can be the right choice."
  },
  {
    question: "Who are these founders I can talk to?",
    answer: "We've connected with founders in their teens and twenties who are currently running billion-dollar companies. They've been through this exact conversation with their own parents and can share their experiences firsthand."
  },
  {
    question: "How does this work?",
    answer: "Share your plan with us. If we think you're serious and have something worth pursuing, we'll connect you with founders who can talk to your parents and share their journey."
  },
  {
    question: "Is dropping out right for me?",
    answer: "Only you can answer that. But if you have a clear idea, the skills to execute, and the drive to see it through, sometimes the best path forward isn't the traditional one."
  },
]

export function FAQ() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-foreground/10">
      <h2 className="font-black text-4xl md:text-5xl lg:text-6xl tracking-tight mb-12">
        FAQ
      </h2>
      
      <Accordion type="single" collapsible className="max-w-3xl">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-foreground/10">
            <AccordionTrigger className="text-left font-bold text-xl md:text-2xl py-6 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-lg md:text-xl text-foreground/70 pb-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
