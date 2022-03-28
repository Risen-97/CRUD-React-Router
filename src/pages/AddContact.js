import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
import { useContact } from "../context/contact-auth";
import { v4 as uuidv4 } from "uuid";

const AddContact = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const [contact, setContact] = useContact();

  const notEmpty = firstName && lastName && email && gender;
  const addContactHandler = (e) => {
    e.preventDefault();

    if (notEmpty) {
      const newContact = { id: uuidv4(), firstName, lastName, gender, email };
      setContact({
        ...contact,
        contactList: [...contact.contactList, newContact],
      });
      navigate("/contact");
    }
  };
  return (
    <div className="flex flex-col items-center py-20">
      <Title title="Add Contact Page" />
      <form
        onSubmit={addContactHandler}
        className="bg-cyan-900 max-w-2xl w-full rounded-lg overflow-hidden p-4 gap-10"
      >
        <div className="flex gap-10 mb-5">
          <div className="flex flex-col gap-2 w-full my-5">
            <label>First Name :</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Enter your first name"
              className="w-full outline-none p-2 text-slate-600 rounded-lg border-none"
            />
            <label>Email :</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your Email"
              className="w-full outline-none p-2 text-slate-600 rounded-lg border-none"
            />
          </div>
          <div className="flex flex-col gap-2 w-full my-5">
            <label>Last Name :</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Enter your last name"
              className="w-full outline-none p-2 text-slate-600 rounded-lg border-none"
            />
            <label>Gender :</label>
            <input
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              type="text"
              placeholder="Enter your gender"
              className="w-full outline-none p-2 text-slate-600 rounded-lg border-none"
            />
          </div>
        </div>
        <Button name="Add To Contact" />
      </form>
    </div>
  );
};

export default AddContact;
