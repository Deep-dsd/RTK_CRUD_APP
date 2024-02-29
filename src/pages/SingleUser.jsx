import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const SingleUser = () => {
  const { users } = useSelector((state) => state.userDetails);
  const { userId } = useParams();
  const user = users.find((user) => user.id === userId);

  return (
    <section className="single">
      <h3>Name: {user.name}</h3>
      <h4>E-Mail: {user.email}</h4>
      <h5>Age: {user.age}</h5>
      <h5>Gender: {user.gender}</h5>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        quibusdam, iusto magni soluta similique aliquid ipsa totam assumenda
        nihil quos esse, perspiciatis ullam? Provident, ad!
      </p>
      <Link to="/">Back To Posts</Link>
    </section>
  );
};

export default SingleUser;
