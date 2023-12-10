/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskList from "./TaskList";
import Form from "./Form";
import AddButton from "./AddButton";

const Tasks = () => {
  const [show, setShow] = useState(true);
  const [tasks, setTasks] = useState([]);

  const initialTask = {
    id: Date.now(),
    task: "",
    dat: "",
    reminder: false,
  };
  const [val, setVal] = useState(initialTask);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal((prev) => ({ ...prev, [name]: value }));
  };

  const handledelete = (id) => {
    const deletedtasks = tasks.filter((el) => el.id !== id);
    localStorage.setItem("tasks", JSON.stringify(deletedtasks));
    setTasks(deletedtasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("tasks", JSON.stringify([...tasks, val]));
    setTasks([...tasks, val]);
    setVal(initialTask);
  };

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
  }, []);
  return (
    <>
      <div className="task-tracker">
        <AddButton show={show} setShow={setShow} />
        <div>
          <Form
            show={show}
            val={val}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />

          {tasks?.length != 0 ? (
            <div className="tasklist">
              {tasks
                .slice()
                .reverse()
                .map((task) => (
                  <TaskList
                    key={task.id}
                    {...task}
                    handledelete={handledelete}
                  />
                ))}
            </div>
          ) : (
            <p>No Task To Show!!</p>
          )}
        </div>
        <div className="copyright">
          <p>Copyright@2021</p>
          <Link>About</Link>
        </div>
      </div>
    </>
  );
};

export default Tasks;
