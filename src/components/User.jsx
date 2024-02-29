import React from "react";
import { Link, useParams } from "react-router-dom";
import { deleteData } from "../features/userDetailsSlice/userDetailsSlice";
import { useDispatch } from "react-redux";

const User = ({ name, email, age, gender, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="user">
      <h2>{name}</h2>
      <h3>{email}</h3>
      <h4>
        {age}, {gender}
      </h4>
      <div className="btn-container">
        <Link to={`/${id}`} className="btn view-btn">
          View
        </Link>
        <Link to={`/edit/${id}`} className="btn edit-btn">
          Edit
        </Link>
        <button
          type="button"
          className="btn del-btn"
          onClick={() => dispatch(deleteData(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default User;
