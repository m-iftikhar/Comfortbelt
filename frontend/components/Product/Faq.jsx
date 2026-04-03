"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const faqs = [
  {
    question: "Will it stay in place?",
    answer: "Yes, it is designed to stay securely in place all day."
  },
  {
    question: "Is it comfortable for all-day wear?",
    answer: "Absolutely! It’s lightweight and comfortable."
  },
  {
    question: "Is it suitable for work use?",
    answer: "Yes, it’s perfect for both casual and professional use."
  },
  {
    question: "Will it fit my jeans?",
    answer: "It fits most standard jeans and pants."
  }
];

export default function FAQ() {
  return (
    <div className="bg-[#6b4a2b] py-16 px-4 text-white">
      <div className="max-w-2xl mx-auto">
        
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked
        </h2>

        <Accordion.Root type="single" collapsible className="space-y-2">
          {faqs.map((item, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="border-b border-white/30"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between w-full py-4 text-left font-medium group">
                  {item.question}
                  <ChevronDownIcon className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="pb-4 text-white/80">
                  {item.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      {/* ✅ Animation same file میں */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            height: var(--radix-accordion-content-height);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            height: var(--radix-accordion-content-height);
            opacity: 1;
          }
          to {
            height: 0;
            opacity: 0;
          }
        }

        .animate-slideDown {
          animation: slideDown 300ms ease-out;
        }

        .animate-slideUp {
          animation: slideUp 300ms ease-out;
        }
      `}</style>
    </div>
  );
}