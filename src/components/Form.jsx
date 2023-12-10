import React from "react";

const Form = ({ show, val, handleSubmit, handleChange }) => {
  return (
    <div style={{ display: show ? "none" : "block" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task</label>
        <br />
        <input
          type="text"
          id="task"
          placeholder="Add Task"
          name="task"
          value={val.task}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="task">Day & Time</label>
        <br />
        <input
          type="datetime-local"
          id="task"
          placeholder="Add Day & Time"
          name="dat"
          value={val.dat}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <p className="reminder">
          <label htmlFor="reminder">Set Reminder</label>
          <input
            type="checkbox"
            onChange={handleChange}
            name="reminder"
            checked={val.reminder}
          />
        </p>
        <br />
        <input type="submit" value="Save Task" />
        <br />
        <br />
      </form>
    </div>
  );
};

export default Form;
