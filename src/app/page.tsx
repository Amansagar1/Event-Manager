import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
<h1 className="flex w-full items-center justify-center text-4xl font-bold border-b-2 border-sky-200"> Please go to <a className="text-sky-600 hover:underline" href="/events">/events ...</a>  for Event Manager </h1>
    </div>
  );
}
