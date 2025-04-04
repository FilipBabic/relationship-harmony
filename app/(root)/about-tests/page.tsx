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
    <div className="flex flex-col items-center justify-center py-20 leading-10 tracking-widest text-[#394155]">
      <p className="rounded-md bg-warm-pink px-4 text-white">About Tests</p>
      <h1 className="py-4 text-center text-5xl/snug">Understanding Our Tests</h1>
      <p className="text-center text-xl">
        Our comprehensive assessment combines three powerful frameworks to provide you with deep
        relationship insights
      </p>
      <div
        className="flex w-full flex-col items-center justify-center gap-4
       py-8 pb-2 md:flex-row md:pb-20"
      >
        <Button
          className="flex w-2/3 items-center border-2 border-[#394155] bg-[#F2F2F2] p-4
         text-[#394155] hover:bg-[#5A6A7A] hover:text-white md:w-auto"
        >
          <Link href="/about-tests#mbti" className="flex items-center gap-x-2">
            MBTI Personality Types
            <ArrowDown />
          </Link>
        </Button>
        <Button
          className="flex w-2/3 items-center border-2 border-warm-pink bg-[#FFF8F9] p-4
         text-[#394155] hover:bg-warm-pink hover:text-white md:w-auto"
        >
          <Link href="/about-tests#love-languages" className="flex items-center gap-x-2">
            Love Languages
            <ArrowDown />
          </Link>
        </Button>
        <Button
          className="flex w-2/3 items-center border-2 border-[#F9B88B] bg-[#fef8f1] p-4
         text-[#394155] hover:bg-[#F9B88B] hover:text-white md:w-auto"
        >
          <Link href="/about-tests#big5" className="flex items-center gap-x-2">
            Big 5 Personality Traits
            <ArrowDown />
          </Link>
        </Button>
      </div>
      <div id="mbti">
        <CustomCard textColor="text-[#394155]" bgColor="bg-[#F2F2F2]" className=" border-[#394155]">
          <div className="flex flex-col items-center gap-6 text-ellipsis text-sm md:flex-row md:items-center">
            <div className="flex-1">
              <h2 className="py-6 text-xl font-bold text-[#394155]">MBTI Personality Types</h2>
              <p>
                The Myers-Briggs Type Indicator (MBTI) is one of the world&apos;s most popular
                personality assessments. Based on Carl Jung&apos;s theory of psychological types, it
                categorizes people into 16 distinct personality types based on four dichotomies:
              </p>
              <CustomList items={MBTIPersonalityTypes} schortcutColor="bg-[#394155]" />

              <p>
                Understanding your MBTI type and your partner&apos;s can reveal insights into
                communication styles, potential areas of conflict, and strategies for better
                understanding each other.
              </p>
            </div>

            <div className="shrink-0">
              <Image
                src="/images/couple-in-nature.jpg"
                height={200}
                width={400}
                alt="Two Girls Talking"
                className="w-full rounded-sm border-4 border-[#394155] shadow-lg transition-transform
                 duration-300 hover:translate-x-1 hover:translate-y-6 hover:scale-125 md:w-auto"
              />
            </div>
          </div>
        </CustomCard>
      </div>
      <div id="love-languages">
        <CustomCard textColor="text-[#394155]" bgColor="bg-[#FFF8F9]" className="border-warm-pink">
          <div className="flex flex-col items-center gap-6 text-ellipsis text-sm md:flex-row md:items-center">
            <div className="shrink-0">
              <Image
                src="/images/couple-on-beach-2.jpg"
                height={200}
                width={400}
                alt="Two Girls Talking"
                className="w-full rounded-sm border-4 border-warm-pink shadow-lg transition-transform
                 duration-300 hover:translate-x-1 hover:translate-y-6 hover:scale-125 md:w-auto"
              />
            </div>
            <div className="flex-1">
              <h2 className="py-6 text-xl font-bold text-warm-pink">The Five Love Languages</h2>
              <p>
                Developed by Dr. Gary Chapman, the Five Love Languages describe how people express
                and experience love. Understanding your own and your partner&apos;s love languages
                can dramatically improve how you communicate affection and appreciation.
              </p>
              <CustomList items={fiveLoveLanguages} />
              <p>
                Misalignment in love languages is a common source of relationship difficulties. By
                learning to speak each other's primary love language, couples can more effectively
                communicate their love and appreciation.
              </p>
            </div>
          </div>
        </CustomCard>
      </div>
      <div id="big5">
        <CustomCard textColor="text-black" bgColor="bg-[#fef8f1]" className="border-[#F9B88B]">
          <div className="flex flex-col items-center gap-6 text-ellipsis text-sm md:flex-row md:items-center">
            <div className="flex-1">
              <h2 className="py-6 text-xl font-bold text-[#F9B88B]">Big 5 Personality Traits</h2>
              <p>
                The Big 5 (or Five-Factor Model) is a widely respected scientific framework that
                measures personality across five key dimensions. Unlike other personality
                frameworks, it measures each trait on a spectrum rather than categorizing people
                into distinct types.
              </p>
              <CustomList items={big5PersonalityTraits} schortcutColor="bg-[#F9B88B]" />
              <p>
                Understanding where you and your partner fall on each of these dimensions can
                provide valuable insights into behavior patterns, potential challenges, and
                strategies for effective communication.
              </p>
            </div>

            <div className="shrink-0">
              <Image
                src="/images/couple-in-grass.jpg"
                height={200}
                width={400}
                alt="Two Girls Talking"
                className="w-full rounded-sm border-4 border-[#F9B88B] shadow-lg transition-transform
                 duration-300 hover:translate-x-1 hover:translate-y-6 hover:scale-125 md:w-auto"
              />
            </div>
          </div>
        </CustomCard>
      </div>
    </div>
  );
};

export default AboutTests;
