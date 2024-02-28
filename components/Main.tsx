import React from "react";
import Image from "next/image";
import { revalidateTag } from "next/cache";

type ResponseData = {
  value: string;
};

async function Main() {
  const response = await fetch("https://api.chucknorris.io/jokes/random", {
    cache: "no-cache",
    next: {
      tags: ["joke"],
    },
  });
  let data: ResponseData = await response.json();

  async function getNextRandomJoke() {
    "use server";
    revalidateTag("joke");
  }
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
      <div className="flex flex-col justify-between w-[70%] h-[70%] py-3 items-center">
        <p className="text-center text-2xl">{data.value}</p>
        <form className="w-[100%] text-center" action={getNextRandomJoke}>
          <button className="border-2 rounded-2xl py-2 w-[50%] hover:bg-slate-400 font-bold transition-colors">
            Next
          </button>
        </form>
      </div>
    </main>
  );
}

export default Main;
