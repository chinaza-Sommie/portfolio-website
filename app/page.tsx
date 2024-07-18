import Image from "next/image";
import Landing from "./components/landing_page";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // #111A24 and yellow #F8EE00
    <main className="mx-10 px-5">
      <Navbar/>
      <Landing/>
    </main>
  );
}
