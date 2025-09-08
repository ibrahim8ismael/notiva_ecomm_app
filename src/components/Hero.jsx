import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Buttons";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["700","800"], display: "swap" });

// height can be: "sm" | "md" | "lg" | "xl" | "full"
const heightClasses = {
  full: "min-h-[75vh]",
};

const Hero = ({ height = "full" }) => {
  const containerHeight = heightClasses[height] || heightClasses.full;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/img/hero.png"
          alt="Notiva - Aesthetic stationery hero image"
          fill
          priority
          className="object-cover"
        />
        {/* subtle dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Centered content */}
      <div className={`relative z-10 flex items-center justify-center ${containerHeight}`}>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className={`${poppins.className} text-white text-4xl sm:text-5xl font-extrabold tracking-tight`}>
            Spend less. Write more.
          </h1>
          {/* Subtitle (English only) */}
          <p className="mt-4 text-white/90 text-lg sm:text-xl">
            Discover aesthetic stationery designed for your creative journey.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <Link href="/categories">
              <Button variant="default" size="lg">Shop Categories</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
