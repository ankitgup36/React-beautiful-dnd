import React from "react";
import { taskData } from "../lib/constants/taskList";
import TaskDetails from "./TaskDetails";

const TaskList: React.FC<{ tasksList: string[] }> = ({ tasksList }) => (
  <>
    {tasksList.map((taskId: string, index: number) => {
      const task = taskData.find((task) => task.id === taskId);
      return task ? (
        <TaskDetails task={task} index={index} key={task.id} />
      ) : null;
    })}
  </>
);

export default TaskList;
