import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
import { useContact } from "../context/contact-auth";

const UserDetails = () => {
  const { userId } = useParams();
  const [contact] = useContact();
  const navigate = useNavigate();
  const findUser = contact.contactList.find((cont) => {
    return cont.firstName + "-" + cont.lastName === userId;
  });

  if (!findUser) {
    return <Navigate to="/contact" />;
  }

  return (
    <div className="flex flex-col items-center py-20 max-w-6xl mx-auto">
      <Title title="User Detail Page" />
      <div className="flex gap-40 mt-10">
        <img
          src="https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg"
          alt=""
          className="w-96 h-96"
        />

        <div className="flex flex-col gap-5">
          <h2 className="text-2xl mb-10">
            {findUser?.firstName} {findUser?.lastName}
          </h2>
          <span className="">Email : {findUser?.email}</span>
          <span className="">Gender : {findUser?.gender}</span>
          <p className="leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            voluptatibus harum. Quas, accusamus, nisi doloribus aperiam natus
            earum fugit quos culpa voluptas suscipit odit deleniti quo nihil
            nobis odio labore!
          </p>
          <Button onClick={() => navigate("/contact")} name="Go Back" />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
