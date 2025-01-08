/* eslint-disable react-hooks/exhaustive-deps */
import { IQuote } from "app/models/quotes/quotes-model";
import Quotes from "app/api/quotes/quotes-data.json";
import { useEffect, useState } from "react";

export const useQuotes = () => {
  const [quote, setQuote] = useState<IQuote | undefined>(undefined);
  const [idsUsed, setIdsUsed] = useState<number[]>([]);

  const pickRandomQuote = () => {
    if (idsUsed.length === Quotes.length) {
      setIdsUsed([]);
      setQuote(Quotes[0]);
      return;
    }

    const randomIndex = Math.floor(Math.random() * Quotes.length);

    if (idsUsed.includes(Quotes[randomIndex].id)) {
      pickRandomQuote();
      return;
    }

    setQuote(Quotes[randomIndex]);
    setIdsUsed([...idsUsed, Quotes[randomIndex].id]);
  };

  useEffect(pickRandomQuote, []);

  return { quote, pickRandomQuote };
};
