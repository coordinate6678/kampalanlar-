"use client";

import { useId, useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: AccordionItemProps) {
  return (
    <div className="border-b border-forest-100 last:border-b-0">
      <button
        type="button"
        id={`${id}-button`}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-4 text-left font-medium text-forest-800 hover:text-amber-700 transition-colors"
      >
        <span>{question}</span>
        <span
          className={`shrink-0 text-amber-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        hidden={!isOpen}
        className="pb-4 text-gray-600 leading-relaxed"
      >
        {answer}
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export function Accordion({ items }: AccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="rounded-xl bg-white border border-forest-100 shadow-sm divide-y divide-forest-100">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          id={`${baseId}-${index}`}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}
