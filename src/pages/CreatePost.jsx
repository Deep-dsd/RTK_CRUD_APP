import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postData } from "../features/userDetailsSlice/userDetailsSlice";
import InputForm from "../components/InputForm";

const CreatePost = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    gender: "male",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(postData(user));
    navigate("/");
  };

  const inputHandler = (e) => {
    setUser((prevUser) => {
      return { ...prevUser, [e.target.name]: e.target.value };
    });
  };
  return (
    <section className="create-post">
      <h3>Fill The Data</h3>
      <InputForm
        handlingForm={formHandler}
        handlingInput={inputHandler}
        user={user}
      />
    </section>
  );
};

export default CreatePost;
