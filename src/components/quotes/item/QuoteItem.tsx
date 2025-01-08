import { IQuote } from "app/models/quotes/quotes-model";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function QuoteItem({ quote }: { quote: IQuote }) {
  return (
    <>
      <blockquote className="flex flex-col justify-center items-center mt-auto mb-auto font-[family-name:var(--font-geist-sans)] w-3/4 md:w-1/2">
        <TypeAnimation
          className="text-2xl text-center font-mono "
          speed={70}
          key={quote.id}
          sequence={[`“${quote.phrase}”`]}
        ></TypeAnimation>
        <footer className="italic text-right mt-[16px] text-xl">
          - {quote?.character}
        </footer>
      </blockquote>

      <Image
        src="/wallpapers/LOTR.jpg"
        alt="wallpaper"
        className="absolute top-0 left-0 z-[-1] opacity-20"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        priority
      />

      <Image
        src="/ilustrations/ring-phrase.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="wallpaper"
        className="ring-filter absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] w-3/4 lg:w-2/5"
      />
    </>
  );
}

export default QuoteItem;
