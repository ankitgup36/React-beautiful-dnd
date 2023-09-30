import React from "react";
import { taskData } from "../lib/constants/taskList";
import TaskDetails from "./TaskDetails";

const TaskList: React.FC<{ tasksList: string[] }> = ({ tasksList }) => (
  <>
    {tasksList.length !== 0 ? (
      tasksList.map((taskId: string, index: number) => {
        const task = taskData.find((task) => task.id === taskId);
        return task ? (
          <TaskDetails task={task} index={index} key={task.id} />
        ) : null;
      })
    ) : (
      <p className="text-center text-danger">No tasks for today !!</p>
    )}
  </>
);

export default TaskList;
