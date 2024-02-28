import React from "react";
import CustomButtom from "./CustomButtom";
import { revalidateTag } from "next/cache";

type ResponseData = {
  value: string;
};

async function QuoteComponent() {
  const response = await fetch("https://api.chucknorris.io/jokes/random", {
    cache: "no-cache",
    next: {
      tags: ["joke"],
    },
  });
  const data: ResponseData = await response.json();

  async function getNextRandomJoke() {
    "use server";
    revalidateTag("joke");
  }

  return (
    <div className="flex flex-col justify-between w-[70%] h-[70%] py-3 items-center">
      <p className="text-center text-2xl">{data.value}</p>
      <form className="w-[100%] text-center" action={getNextRandomJoke}>
        <CustomButtom />
      </form>
    </div>
  );
}

export default QuoteComponent;
