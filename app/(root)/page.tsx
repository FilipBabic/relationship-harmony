import { auth } from "@/auth";
import { api } from "@/lib/api";
import handleError from "@/lib/handlers/error";

const getAllUsers = async () => {
  try {
    return await api.users.getAll();
  } catch (error) {
    return handleError(error);
  }
};

const Home = async () => {
  const session = await auth();
  console.log("SESSION", session);
  const users = await getAllUsers();
  console.log(users);
  return (
    <div className="py-32">
      <h1 className="text-center text-3xl font-bold text-mint-blue">
        Welcome to RELATIONSHIP HARMONY
      </h1>
    </div>
  );
};

export default Home;
