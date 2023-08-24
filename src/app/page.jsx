import { Navbar, Sidebar } from "@/components";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Navbar className="text-primary" bgLineColor="bg-secondary" />
      <main>
        <div className="text-primary mt-16 space-y-5">
          <p className="font-bold text-5xl leading-tight sm:text-7xl md:text-9xl">
            Arief
            <br />
            Romadhon
          </p>
          <p className="font-light text-lg tracking-widest md:text-2xl md:tracking-[0.5rem]">
            BACKEND DEVELOPER
          </p>
        </div>
        <p className="mt-14 text-sm w-64 md:text-lg md:w-80">
          Currently looking for opportunities as a backend or frontend developer
        </p>
        <div className="absolute bottom-5 text-sm md:text-lg">
          <p>BLITAR, INDONESIA</p>
          <p>ariefromadhon26@gmail.com</p>
        </div>
        <Sidebar />
      </main>
    </div>
  );
}
