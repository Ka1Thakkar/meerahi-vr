"use client";

import { Josefin_Sans, Philosopher, Poppins } from "next/font/google";
import Image from "next/image";
import experience from "@/public/Experience.svg";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const headingFont = Poppins({
  subsets: ["latin"],
  weight: [
    "700",
    "400",
    "100",
    "200",
    "300",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});
const subheadingFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
});

const Experience = () => {
  return (
    <section className="py-24 text-black">
      <div className="flex gap-2 items-center px-10 sm:px-20 2xl:px-40">
        <p className="text-xl">
          Stay <span className=" text-[#5BB483] font-semibold">Tuned</span>
        </p>
        {/* <div className="w-[5%] h-[2px] bg-[#5BB483] rounded-full"></div> */}
      </div>
      <div className="pt-2 px-10 sm:px-20 2xl:px-40">
        <h1 className="xl:text-7xl text-4xl font-semibold">
          The Timeline for Upcoming Initiaves
        </h1>
        <p className="lg:text-2xl text-lg pt-5 font-extralight">
          Meerahi bloomed in December 2023, fueled by a vision for accessible
          mental well-being. Since then, we've been busy gathering insights,
          crafting solutions, and testing prototypes. Buckle up - exciting
          developments, including the launch of our first product, Vasara, are
          on the horizon in April 2025!
        </p>
      </div>
      <Timeline />
    </section>
  );
};

export default Experience;

const Timeline = () => {
  return (
    <div className={" relative w-full min-h-screen text-black"}>
      <div
        style={{ left: `calc(50vw - 2.5px)` }}
        className="absolute min-h-[90%] w-[5px] bg-[#5DA399]/10 top-[5%] rounded-full hidden lg:flex"
      ></div>
      <div className="py-32 flex flex-col gap-y-20 px-10 sm:px-20 2xl:px-40">
        {timelineEvents.map((event, i) => {
          return (
            <div className="w-full h-fit" key={i}>
              {i % 2 === 0 ? (
                <div className="lg:grid lg:grid-cols-2">
                  <div className="hidden lg:flex"></div>
                  <TimelineElement i={i} />
                </div>
              ) : (
                <div className="lg:grid lg:grid-cols-2">
                  <TimelineElement i={i} />
                  <div className="hidden lg:flex"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface TimelineElementProps {
  i: number;
}

const TimelineElement = ({ i }: TimelineElementProps) => {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, {
    margin: "0px -100px 100px 0px",
    once: true,
  });
  return (
    <motion.div
      ref={headingRef}
      style={{
        transform: isInView ? "none" : "translateY(150px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
      className={
        i % 2 === 0
          ? "flex gap-5 lg:ml-[-25px] z-10"
          : "flex gap-5 lg:flex-row-reverse lg:mr-[-25px] z-10 lg:text-right"
      }
    >
      <div className="lg:w-[50px] w-[25px] h-[25px] lg:h-[50px] bg-[#5BB483] rounded-full hidden lg:flex"></div>
      <div className="lg:w-9/12">
        <div
          className={
            i % 2 === 0
              ? "flex gap-2 items-center"
              : "flex gap-2 lg:flex-row-reverse items-center"
          }
        >
          <p className="text-lg text-[#5BB483]">{timelineEvents[i].date}</p>
          {/* <div className="h-[2px] w-[50px] rounded-full bg-[#5BB483]"></div> */}
        </div>
        <h1 className={" lg:text-4xl text-3xl font-bold pt-2"}>
          {timelineEvents[i].event}
        </h1>
        <p className="lg:text-lg font-extralight pt-5">
          {timelineEvents[i].description}
        </p>
      </div>
    </motion.div>
  );
};

const timelineEvents = [
  {
    date: "December, 2023",
    event: "Idea of Meerahi born.",
    description:
      "From a shared dream of mental balance for all, Meerahi bloomed, offering VR tools for a calmer tomorrow.",
  },
  {
    date: "January, 2024",
    event:
      "Started reaching out to experts, conducting market analysis and working on prototype.",
    description:
      "January unfolded like a blooming flower, each day brimming with knowledge. We devoured research, poured our hearts into crafting the first prototype – a seed taking root in fertile ground. ",
  },
  {
    date: "February, 2024",
    event: "Started alpha testing of our proof of concept and basic prototype.",
    description:
      "February became a whirlwind of progress. Our alpha test bloomed with success, and the Hult Prize at BITS Pilani, a sweet fruit borne from our dedication.",
  },
  {
    date: "28 February, 2024",
    event: "Won HULT PRIZE Regionals",
    description: "",
  },
  {
    date: "March, 2024",
    event: "Take our idea to the public and launch our website",
    description:
      "Spring whispered its arrival, and with it, a yearning to share Meerahi's promise with the world. Launching our website in March felt like a deep, cleansing breath – a moment of calm confidence, unveiling the world we were building.",
  },
  {
    date: "June 2025",
    event: "Expected roll out of our first product- Vasara",
    description:
      "And then came June, a vibrant tapestry woven with possibilities. The release of Vasara, our first step on this meaningful journey, marked a new dawn. From that December spark to the hope-filled horizon of April, Meerahi's story is one of purpose, milestones, and a collective belief in the incredible path ahead. Here's to the calming embrace of a future filled with well-being!",
  },
];

