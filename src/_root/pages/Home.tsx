import { useUserContext } from "@/context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { checkAuthUser } = useUserContext();

  const isLoggedIn = checkAuthUser();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(1);
    }
  }, [isLoggedIn, navigate]);

  return <div>Home</div>;
};

export default Home;
