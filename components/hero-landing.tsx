import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { BlurredBlob } from "@/components/blurred-blob";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
export default async function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-24">
      <div className="container flex max-w-screen-md flex-col items-center gap-5 text-center">
        <h1 className="font-satoshi text- text-[40px] font-black leading-[1.15] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.15]">
          Find Your <AuroraText>Perfect </AuroraText>
          <LineShadowText>Extracurriculars</LineShadowText> now.
        </h1>
        <p className="max-w-2xl text-balance text-muted-foreground sm:text-lg">
          Project Connect Forum is a forum where youth-led initiatives recruit members,
          and high school students find extracurriculars!
        </p>
        <div className="flex justify-center space-x-2">
          <Link
            href="/projects"
            prefetch={true}
            className={cn(
              buttonVariants({ variant: "rainbow", size: "lg" }),
              "group hover:scale-[1.025]"
            )}
          >
            Explore Projects
            <ArrowRight className="size-4 group-hover:translate-x-1 duration-200 transition-transform" />
          </Link>
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0"
        )}
      />
      <BlurredBlob
        className="lg:-top-[120%] -top-1/2 left-1/2 lg:-translate-x-1/8 lg:opacity-30 opacity-40 rotate-90 lg:rotate-270"
        colorFrom="#EC003F"
        colorTo="#4F39F6"
      />
    </section>
  );
}
