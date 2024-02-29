import React from "react";
import Image from "next/image";
import QuoteComponent from "./QuoteCount";

function Main() {
  return (
    <main className="flex h-[calc(100vh-200px)] items-center px-12 justify-between gap-5">
      <Image
        className="rounded-2xl z-[-1]"
        src="/image/hund.jpg"
        width={350}
        height={300}
        priority={false}
        alt="Image not available"
      />
      <QuoteComponent />
    </main>
  );
}

export default Main;
