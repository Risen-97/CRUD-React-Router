import React from "react";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center py-20">
      <Title title="Home Page" />
      <Button onClick={() => navigate("/contact")} name="Go To Contact Page" />
    </div>
  );
};

export default Home;
