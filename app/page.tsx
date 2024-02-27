import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="flex h-[100px] items-center px-12  bg-slate-400">
        <h1 className="font-bold text-5xl">W&S</h1>
      </header>
      <main className="flex h-[calc(100vh-200px)] items-center px-12 justify-between gap-5">
        <Image
          className="rounded-2xl"
          src="/image/hund.jpg"
          width={350}
          height={300}
          priority={false}
          alt=""
        />
        <div className="flex flex-col justify-between w-[70%] h-[70%] py-3 items-center">
          <p className="text-center">test</p>
          <button className="border-2 rounded-2xl w-[50%] py-2 hover:bg-slate-400 font-bold transition-colors">
            Next
          </button>
        </div>
      </main>
      <footer className="flex h-[100px] items-center px-12 bg-slate-400 font-bold text-3xl">
        Visitor:{" "}
      </footer>
    </div>
  );
}
