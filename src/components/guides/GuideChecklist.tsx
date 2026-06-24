"use client";

import { useState } from "react";

interface GuideChecklistProps {
  title: string;
  items: string[];
}

export function GuideChecklist({ title, items }: GuideChecklistProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  function toggleItem(index: number) {
    setChecked((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div className="mt-6 rounded-xl border border-forest-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-lg text-amber-500" aria-hidden="true">
          📋
        </span>
        <h3 className="font-display text-lg font-bold text-forest-800">
          {title}
        </h3>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => {
          const isChecked = checked.has(index);

          return (
            <li key={item}>
              <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-forest-50 bg-cream/40 px-3 py-2.5 text-sm text-forest-700 transition-colors hover:border-amber-200">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleItem(index)}
                  className="mt-0.5 rounded border-forest-300 text-forest-800 focus:ring-amber-400"
                />
                <span className={isChecked ? "line-through opacity-60" : undefined}>
                  {item}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
