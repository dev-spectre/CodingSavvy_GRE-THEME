import { Button } from "@/components/Button";
import { HeroAnimation } from "./Animations";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#081329] to-[#1b428e]">
      <section className="container mx-auto grid grid-cols-2 min-h-[100lvh] items-center justify-between px-5 text-white">
        <header className="w-full">
          <h1 className="font-roboto text-7xl font-[900] text-[#FF9053] uppercase">
            Coding Savvy Bootcamps
          </h1>
          <p className="font-inter mb-9 text-[1.75rem]/[158%] font-[600]">
            Placement-first coding bootcamp platform for students{" "}
            <span className="blockfont-[400] block text-2xl">
              6-month flagship Placement Supreme with placement assistance.
            </span>
          </p>
          <div className="font-poppins flex gap-5 text-lg">
            <Button label="Apply now" />
            <div className="inline-block rounded-lg bg-gradient-to-t from-[#1b438f] to-[#34a0bd] px-[2px] py-[2px]">
              <a
                href="#courses"
                className="inline-block rounded-md bg-[#132e63] px-3 py-2"
              >
                View programs
              </a>
            </div>
          </div>
        </header>
        <HeroAnimation />
      </section>
    </div>
  );
}
