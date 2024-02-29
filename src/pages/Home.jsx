import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import User from "../components/User";
import {
  filterPost,
  fetchData,
} from "../features/userDetailsSlice/userDetailsSlice";

const Home = () => {
  const [gender, setGender] = useState("all");
  const dispatch = useDispatch();
  const { users, isLoading, error, filteredUsers } = useSelector(
    (state) => state.userDetails
  );

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const filterHandler = (e) => {
    setGender(e.target.value);
    dispatch({ type: filterPost, payload: e.target.value });
  };

  if (isLoading) {
    return (
      <div className="load">
        <h3>loading...</h3>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        <h3>{error}</h3>
      </div>
    );
  } else {
    if (users.length === 0) {
      return (
        <div className="empty">
          <h3>Why So Empty !!</h3>
          <Link to="/create">Create Post</Link>
        </div>
      );
    } else {
      return (
        <section className="user-container">
          <div className="filter-section">
            <label htmlFor="all">All</label>
            <input
              type="radio"
              name="gender"
              id="all"
              onChange={filterHandler}
              value="all"
              checked={gender === "all"}
            />

            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="male"
              onChange={filterHandler}
              value="male"
              checked={gender === "male"}
            />

            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="female"
              onChange={filterHandler}
              value="female"
              checked={gender === "female"}
            />
          </div>
          <div className="users">
            {filteredUsers.map((user) => {
              return <User key={user.id} {...user} />;
            })}
          </div>
        </section>
      );
    }
  }
};

export default Home;
