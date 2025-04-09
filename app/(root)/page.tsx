import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log("SESSION", session);
  return (
    <div className="py-32">
      <h1 className="text-center text-3xl font-bold text-mint-blue">
        Welcome to RELATIONSHIP HARMONY
      </h1>
    </div>
  );
};

export default Home;
