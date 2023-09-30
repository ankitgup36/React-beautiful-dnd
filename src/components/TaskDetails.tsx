import { FC } from "react";
import { Task } from "../lib/types/types";
import { Card } from "react-bootstrap";
import { Draggable } from "react-beautiful-dnd";
const TaskDetails: FC<{ task: Task; index: number }> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {({ dragHandleProps, draggableProps, innerRef }) => (
        <Card
          className="m-2"
          {...dragHandleProps}
          {...draggableProps}
          ref={innerRef}
        >
          <Card.Body>
            <Card.Text>{task.task}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </Draggable>
  );
};

export default TaskDetails;
