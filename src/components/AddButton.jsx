import React from "react";

const AddButton = ({ show, setShow }) => {
  return (
    <div>
      <h1>Task Tracker</h1>
      <button
        onClick={() => setShow((pre) => !pre)}
        style={{ backgroundColor: show ? "green" : "red" }}>
        {show ? "Add" : "Close"}
      </button>
    </div>
  );
};

export default AddButton;
