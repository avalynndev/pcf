import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export default async function HeroLanding() {
  return (
    <section className="relative space-y-6 py-12 sm:py-20 lg:py-24">
      <div
        className="absolute -left-35 top-22 h-40 w-40 opacity-50 blur-xl animate-pulse"
        style={{
          background: "linear-gradient(135deg, #FF6FD8, #FF8BD5, #FFB3E5)",
          clipPath:
            "path('M24 8c-6 0-10 5-10 10 0 11 20 22 20 22s20-11 20-22c0-5-4-10-10-10-4 0-7 3-10 6-3-3-6-6-10-6z')",
        }}
      />
      <div
        className="absolute -left-10 top-96 h-28 w-28 opacity-40 blur-xl animate-pulse"
        style={{
          background: "linear-gradient(135deg, #FFA36F, #FFC78B, #FFE0B3)",
          clipPath:
            "path('M24 8c-6 0-10 5-10 10 0 11 20 22 20 22s20-11 20-22c0-5-4-10-10-10-4 0-7 3-10 6-3-3-6-6-10-6z')",
        }}
      />

      <div
        className="absolute -right-28 top-20 h-44 w-44 opacity-50 blur-xl animate-pulse"
        style={{
          background: "linear-gradient(135deg, #6FC3FF, #8BD3FF, #B3E4FF)",
          clipPath:
            "path('M24 8c-6 0-10 5-10 10 0 11 20 22 20 22s20-11 20-22c0-5-4-10-10-10-4 0-7 3-10 6-3-3-6-6-10-6z')",
        }}
      />

      <div
        className="absolute -right-50 top-64 h-32 w-32 opacity-40 blur-xl animate-pulse"
        style={{
          background: "linear-gradient(135deg, #6FFFA7, #8BFFC2, #B3FFDA)",
          clipPath:
            "path('M24 8c-6 0-10 5-10 10 0 11 20 22 20 22s20-11 20-22c0-5-4-10-10-10-4 0-7 3-10 6-3-3-6-6-10-6z')",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="container flex max-w-3xl flex-col items-center gap-5 text-center">
        <h1 className="font-breakfast text-[40px] font-black leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
          Free <AuroraText>STEM Tutoring</AuroraText> for
          <LineShadowText> Underserved</LineShadowText> Youth
        </h1>

        <p className="max-w-2xl text-muted-foreground sm:text-lg font-gaegu">
          Free STEM tutoring and mentorship for underrepresented and low-income
          students—especially girls—to help them succeed in STEM and AP courses.
        </p>

        <Link
          href="/tutoring"
          prefetch
          className={cn(
            buttonVariants({ variant: "rainbow", size: "lg" }),
            "group hover:scale-[1.025] font-gaegu "
          )}
        >
          Get Free Tutoring
          <ArrowRight className="size-4 group-hover:translate-x-1 duration-200 transition-transform" />
        </Link>

        <div className="mt-8 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold">1.88M+</p>
            <p className="text-muted-foreground text-xs font-indie-flower">
              Students
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">500+</p>
            <p className="text-muted-foreground text-xs font-indie-flower">
              Opportunities
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">600+</p>
            <p className="text-muted-foreground text-xs font-indie-flower">
              Tutors
            </p>
          </div>
        </div>
      </div>

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        strokeDasharray="4 2"
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0"
        )}
      />
    </section>
  );
}
