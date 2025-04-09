import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import CustomCard from "@/components/custom-card";
import CustomList from "@/components/custom-list";
import {
  fiveLoveLanguages,
  MBTIPersonalityTypes,
  big5PersonalityTraits,
} from "@/components/custom-list/list-data";
import { Button } from "@/components/ui/button";

const AboutTests = () => {
  return (
    <div className="w-full px-4 py-24 tracking-wide text-dark-silver">
      <div className="mx-auto max-w-5xl space-y-6 text-center">
        <p className="inline-block rounded-md bg-warm-pink px-4 py-1 text-sm text-white">
          About Tests
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Understanding Our Tests</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-700">
          Our comprehensive assessment combines three powerful frameworks to provide you with deep
          relationship insights.
        </p>

        <div className="grid gap-4 pt-10 md:grid-cols-3">
          <Button className="flex w-full items-center justify-center gap-x-2 border-2 border-dark-silver bg-light-silver text-dark-silver hover:bg-[#5A6A7A] hover:text-white">
            <Link href="/about-tests#mbti" className="flex items-center gap-x-2">
              MBTI Personality Types
              <ArrowDown />
            </Link>
          </Button>
          <Button className="flex w-full items-center justify-center gap-x-2 border-2 border-warm-pink bg-light-pink text-dark-silver hover:bg-warm-pink hover:text-white">
            <Link href="/about-tests#love-languages" className="flex items-center gap-x-2">
              Love Languages
              <ArrowDown />
            </Link>
          </Button>
          <Button className="flex w-full items-center justify-center gap-x-2 border-2 border-warm-yellow bg-light-yellow text-dark-silver hover:bg-warm-yellow hover:text-white">
            <Link href="/about-tests#big5" className="flex items-center gap-x-2">
              Big 5 Personality Traits
              <ArrowDown />
            </Link>
          </Button>
        </div>
      </div>

      {/* --- MBTI Section --- */}
      <section id="mbti" className="mt-24 items-center">
        <CustomCard
          textColor="text-[#394155]"
          bgColor="bg-[#F2F2F2]"
          className="mx-auto max-w-screen-lg border-dark-silver"
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-bold text-dark-silver">MBTI Personality Types</h2>
              <p className="mb-4">
                The Myers-Briggs Type Indicator (MBTI) is one of the world&apos;s most popular
                personality assessments...
              </p>
              <CustomList items={MBTIPersonalityTypes} schortcutColor="bg-[#394155]" />
              <p className="mt-4">
                Understanding your MBTI type and your partner&apos;s can reveal insights into
                communication styles, potential areas of conflict, and more.
              </p>
            </div>
            <div>
              <Image
                src="/images/couple-in-nature.jpg"
                width={1200}
                height={600}
                alt="Two Girls Talking"
                className="h-auto w-full rounded-md border-4 border-dark-silver shadow-lg transition-transform duration-300 hover:translate-x-1 hover:translate-y-2 hover:scale-105"
              />
            </div>
          </div>
        </CustomCard>
      </section>

      {/* --- Love Languages Section --- */}
      <section id="love-languages" className="mt-24">
        <CustomCard
          textColor="text-[#394155]"
          bgColor="bg-[#FFF8F9]"
          className="mx-auto max-w-screen-lg border-warm-pink"
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Image
                src="/images/couple-on-beach-2.jpg"
                width={1200}
                height={600}
                alt="Two Girls Talking"
                className="h-auto w-full rounded-md border-4 border-warm-pink shadow-lg transition-transform duration-300 hover:translate-x-1 hover:translate-y-2 hover:scale-105"
              />
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold text-warm-pink">The Five Love Languages</h2>
              <p className="mb-4">
                Developed by Dr. Gary Chapman, the Five Love Languages describe how people express
                and experience love...
              </p>
              <CustomList items={fiveLoveLanguages} />
              <p className="mt-4">
                Learning to speak each other&apos;s primary love language can dramatically improve
                your relationship connection.
              </p>
            </div>
          </div>
        </CustomCard>
      </section>

      {/* --- Big 5 Section --- */}
      <section id="big5" className="mt-24">
        <CustomCard
          textColor="text-black"
          bgColor="bg-[#fef8f1]"
          className="mx-auto max-w-screen-lg border-warm-yellow"
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-bold text-warm-yellow">Big 5 Personality Traits</h2>
              <p className="mb-4">
                The Big 5 is a scientific model that measures personality across five spectrums...
              </p>
              <CustomList items={big5PersonalityTraits} schortcutColor="bg-[#F9B88B]" />
              <p className="mt-4">
                Understanding your Big 5 scores helps you and your partner build empathy, awareness,
                and alignment.
              </p>
            </div>
            <div>
              <Image
                src="/images/couple-in-grass.jpg"
                width={1200}
                height={600}
                alt="Two Girls Talking"
                className="h-auto w-full rounded-md border-4 border-warm-yellow shadow-lg transition-transform duration-300 hover:translate-x-1 hover:translate-y-2 hover:scale-105"
              />
            </div>
          </div>
        </CustomCard>
      </section>
    </div>
  );
};

export default AboutTests;
