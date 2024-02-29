import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailsSlice/userDetailsSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { users, searchInput } = useSelector((state) => state.userDetails);
  return (
    <nav>
      <div className="nav-items">
        <h4>RTK</h4>
        <Link to="/create">Create Post</Link>
        <Link to="/">All post({users.length})</Link>
      </div>
      <input
        type="text"
        placeholder="Search post"
        value={searchInput}
        onChange={(e) =>
          dispatch({ type: searchUser, payload: e.target.value })
        }
      />
    </nav>
  );
};

export default Navbar;
