"use client";

import Image from "next/image";
import fetchRandomJoke from "@/lib/fetchJoke";
import { useEffect, useState } from "react";
import { getVisitor, setVisitor } from "@/lib/visitorPrisma";

export default function Home() {
  const [joke, setJoke] = useState("");
  const [visitedNum, setVisitedNum] = useState(0);

  useEffect(() => {
    // Ich möchte den Besucher-Anzahl eins hoch gehen wenn jemanden browser schließt und öffnet aber mit refresh geht es nicht hoch
    const visited = sessionStorage.getItem("visited");
    if (visited === "true") {
      getVisitor().then((value) => {
        if (value) {
          setVisitedNum(value);
        }
      });
    } else {
      sessionStorage.setItem("visited", "true");
      setVisitor().then((value) => {
        if (value) {
          setVisitedNum(value);
        }
      });
    }
    getNextRandomJoke();
  }, []);

  const getNextRandomJoke = () => {
    fetchRandomJoke().then((value) => {
      if (value) {
        setJoke(value);
      }
    });
  };

  return (
    <div>
      <header className="flex h-[100px] items-center px-12 rounded-b-3xl bg-gray-300">
        <h1 className="font-bold text-5xl">W&S</h1>
      </header>
      <main className="flex h-[calc(100vh-200px)] items-center px-12 justify-between gap-5">
        <Image
          className="rounded-2xl z-[-1]"
          src="/image/hund.jpg"
          width={350}
          height={300}
          priority={false}
          alt="Image not available"
        />
        <div className="flex flex-col justify-between w-[70%] h-[70%] py-3 items-center">
          <p className="text-center text-2xl">{joke}</p>
          <button
            onClick={getNextRandomJoke}
            className="border-2 rounded-2xl w-[50%] py-2 hover:bg-slate-400 font-bold transition-colors"
          >
            Next
          </button>
        </div>
      </main>
      <footer className="flex h-[100px] items-center px-12 rounded-t-3xl bg-gray-300 font-bold text-3xl">
        {visitedNum ? <p>Visior: {visitedNum}</p> : null}
      </footer>
    </div>
  );
}
