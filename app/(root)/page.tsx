import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log(session);
  return (
    <div className="py-32">
      <h1 className="text-center text-3xl font-extralight text-mint-blue">
        Welcome to RELATIONSHIP HARMONY
      </h1>

      <h1 className="font-900 text-center font-playfair text-3xl text-warm-pink">
        Welcome to RELATIONSHIP HARMONY
      </h1>

      <h1 className="text-center text-3xl font-bold text-mint-blue">
        Welcome to RELATIONSHIP HARMONY
      </h1>
    </div>
  );
};

export default Home;
