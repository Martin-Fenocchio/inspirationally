"use client";

import QuoteItem from "app/components/quotes/item/QuoteItem";
import { useQuotes } from "app/hooks/quotes/useQuotes";

export default function Home() {
  const { quote, pickRandomQuote } = useQuotes();

  return (
    <div className="flex flex-col items-center py-[64px] justify-items-center min-h-screen font-[family-name:var(--font-knewave)]">
      {quote && <QuoteItem quote={quote} />}

      <button
        className="absolute cursor-pointer bottom-[16px] z-3 flex flex-row gap-3 font-[family-name:var(--font-geist-sans)]"
        onClick={pickRandomQuote}
      >
        Next quote
      </button>
    </div>
  );
}
