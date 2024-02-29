import React, { useState } from "react";
import InputForm from "../components/InputForm";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../features/userDetailsSlice/userDetailsSlice";

const EditPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userId } = useParams();
  const { users } = useSelector((state) => state.userDetails);

  const selectedUser = users.find((user) => user.id === userId);

  const [updatedUser, setUpdatedUser] = useState(selectedUser);

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(updateData(updatedUser));
    navigate("/");
  };

  const inputHandler = (e) => {
    setUpdatedUser((prevUser) => {
      return { ...prevUser, [e.target.name]: e.target.value };
    });
  };
  return (
    <section className="edit-post">
      <h3>Edit Data</h3>
      <InputForm
        handlingForm={formHandler}
        handlingInput={inputHandler}
        user={updatedUser}
      />
    </section>
  );
};

export default EditPost;
