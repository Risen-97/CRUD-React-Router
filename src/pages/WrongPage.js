import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";

const WrongPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center py-20 max-w-4xl mx-auto">
      {/* <Title title="Page Not Found" /> */}
      <Title title="404" />
      <p className="mb-10">page not found unfortunately</p>
      <Button onClick={() => navigate("/")} name="Go Back" />
    </div>
  );
};

export default WrongPage;
