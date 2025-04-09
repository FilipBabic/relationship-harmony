import Image from "next/image";

import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log("SESSION", session);
  return (
    <div className="mx-auto min-h-screen max-w-5xl space-y-6 bg-white px-6 py-24 text-center sm:px-10 md:px-20">
      <p className="inline-block items-center rounded-md bg-warm-pink px-4 py-1 text-sm text-white">
        Home
      </p>
      <div className="mx-auto mb-8 max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold text-dark-silver sm:text-5xl">
          About <span className="text-warm-pink">Relationship Harmony</span>
        </h1>
        <p className="text-lg leading-relaxed text-dark-silver sm:text-xl">
          Relationship Harmony is your personalized guide to deeper emotional connection. We combine
          psychology-backed insights and personality alignment to help couples understand each other
          on a meaningful level.
        </p>
      </div>

      <div className="mx-auto w-full max-w-4xl lg:p-4 ">
        <Image
          src="/images/couple-on-beach.jpg"
          alt="Two Girls Talking"
          width={1200}
          height={600}
          className="h-auto w-full rounded-md border-4 border-gray-300 shadow-lg transition-transform 
                   duration-300 hover:translate-x-1 hover:translate-y-2 hover:scale-105"
          priority
        />
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl items-start gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-warm-pink bg-pink-50 p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold text-warm-pink">Our Mission</h2>
          <p className="text-dark-silver">
            We&apos;re here to help people thrive in their relationships by providing insights
            tailored to their unique personality types. From love languages to conflict resolution,
            Relationship Harmony gives couples a deeper understanding of each other.
          </p>
        </div>

        <div className="rounded-2xl border border-dark-silver bg-light-silver p-6 shadow-sm">
          <h2 className="mb-3 bg-light-silver text-2xl font-semibold text-dark-silver">
            How It Works
          </h2>
          <p className="text-dark-silver">
            Through intuitive quizzes and personality analysis, we guide partners to navigate
            challenges with empathy and clarity. Each couple receives a personalized relationship
            profile full of actionable insights and growth tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
