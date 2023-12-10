import React from "react";

const TaskList = (props) => {
  return (
    <div key={props.id}>
      <div className="task-each">
        <h4>{props.task}</h4>{" "}
        <h5>
          {props.dat}{" "}
          <span onClick={() => props.handledelete(props.id)}>❌</span>
        </h5>
      </div>
    </div>
  );
};

export default TaskList;
