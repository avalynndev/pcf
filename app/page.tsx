import HeroLanding from "@/components/hero-landing";
import InfoCard from "@/components/info-card";
import Image from "next/image";
import { HeaderSection } from "@/components/header-section";
import { ArrowRight } from "lucide-react";

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      <div className="flex flex-col items-center space-y-10">
        <HeroLanding />

        <div className="container flex max-w-screen-md flex-col gap-5 text-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InfoCard />
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-lg px-6 py-16 pt-32">
        <HeaderSection
          title="Resources to Help You Succeed:"
          subtitle="Everything you need to launch, grow, and join impactful student led projects."
        />
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-3">
          {[
            {
              title:
                "Passion Project Counseling + College App Help from a Stanford admit to a strong application that fits YOU.",
              img: "/counselingpic.png",
              link: "https://docs.google.com/forms/d/e/1FAIpQLSfYno1W2PJn5HMiHo7D2QRe2MuXSSv6n6lKUpSn-7B7eyXU1g/viewform",
            },
            {
              title:
                "Permanent Post on our Instagram. Posts have brought in 600+ applications!",
              img: "/promopic.png",
              link: "https://ko-fi.com/s/398540068e",
            },
            {
              title: "Get a Story Shoutout & Recruit Members! Reach 4,000+ story viewers!",
              img: "/shoutout.png",
              link: "https://ko-fi.com/s/7b1799bc3f",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group flex flex-col justify-between"
            >
              <div className="flex aspect-video text-clip rounded-xl">
                <div className="flex-1">
                  <div className="relative size-full origin-bottom transition">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="rounded-xl object-cover"
                      sizes="100%"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2 line-clamp-1 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                {item.title}
              </div>
              <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                {item.title}
              </div>
              <div className="flex items-center text-sm">
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-12 py-12">
        <div className="container mx-auto max-w-screen-lg px-6 flex flex-col items-center text-center md:flex-row md:justify-center md:text-left">
          <div className="w-40 md:w-1/6">
            <Image
              src="/founder.png"
              alt="Andra Daniela Campos"
              width={160} // approximate width for w-40
              height={160} // you can adjust this based on actual aspect ratio
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 md:w-2/3">
            <h2 className="text-2xl font-bold">Founder</h2>
            <p className="mt-4 leading-relaxed">
               This website was founded by{" "}
        <span className="font-semibold">Andra Daniela Campos</span>. As a
        high school student, I found it hard to connect with like-minded
        peers for initiatives I was passionate about. Thus, I created{" "}
        <span className="font-semibold">Project Connect Forum</span> to empower
        students to develop themselves and pursue their dreams. Now, I&apos;m at{" "}
        <span className="font-semibold">Stanford University</span> working
        to inspire the next generation of change-makers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
