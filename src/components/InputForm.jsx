import React from "react";

const InputForm = ({ handlingForm, handlingInput, user }) => {
  return (
    <form onSubmit={handlingForm}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={user.name}
        onChange={handlingInput}
      />

      <label htmlFor="mail">Email</label>
      <input
        type="email"
        name="email"
        id="mail"
        placeholder="Enter your mail"
        value={user.email}
        onChange={handlingInput}
      />

      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        name="age"
        placeholder="Enter your age"
        value={user.age}
        onChange={handlingInput}
      />

      <div className="radio-input">
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={handlingInput}
          checked={user.gender === "male"}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={handlingInput}
          checked={user.gender === "female"}
        />
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default InputForm;
