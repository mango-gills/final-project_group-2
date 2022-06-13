import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import addPersonIcon from "../assets/icons/person_add_black_24dp.svg";

const AddEmailToast = () => {
  const [chatEmail, setChatEmail] = useState("");

  const successAddEmail = () =>
    toast.success("Email Added!", {
      autoClose: 2000,
      pauseOnHover: false,
      closeOnClick: true,
      pauseOnFocusLoss: false,
    });

  const errorAddEmail = () =>
    toast.warn("Invalid email address!", {
      autoClose: 2000,
      pauseOnHover: false,
      closeOnClick: true,
      pauseOnFocusLoss: false,
    });

  const addFriend = () => {
    const input = prompt("Chat a friend.");
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input) {
      if (input.match(mailformat)) {
        successAddEmail();
        setChatEmail(input.trim());
      } else {
        errorAddEmail();
        setChatEmail("");
      }
    } else {
      setChatEmail("");
    }
  };

  console.log(chatEmail);
  return (
    <div>
      <img src={addPersonIcon} onClick={() => addFriend()} />
      <ToastContainer />
    </div>
  );
};

export default AddEmailToast;
