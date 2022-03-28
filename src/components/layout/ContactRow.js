import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const ContactRow = (props) => {
  return (
    <div className="flex items-center justify-between border-b border-slate-500 py-6 hover:bg-slate-900 px-6 transition duration-300">
      <div className="flex gap-3 items-center">
        <BsPersonCircle className="text-5xl" />
        <div className="flex flex-col">
          <span>{props.email}</span>
          <Link
            to={`${props.firstName}-${props.lastName}`}
            className="bg-green-700 text-sm w-fit px-2 py-1"
          >
            check details
          </Link>
        </div>
      </div>

      <button onClick={props.onDelete}>
        <RiDeleteBin6Line className="text-2xl text-red-300" />
      </button>
    </div>
  );
};

export default ContactRow;
