import { Droppable } from "react-beautiful-dnd";
import { Card } from "react-bootstrap";
import TaskList from "./TaskList";
import { Column } from "../lib/types/types";

const ColumnDetails: React.FC<{ column: Column }> = ({ column }) => {
  return (
    <Droppable droppableId={column.id}>
      {({ droppableProps, innerRef, placeholder }) => (
        <Card className="p-3" {...droppableProps} ref={innerRef}>
          <p className="text-center">{column.title}</p>
          <TaskList tasksList={column.tasks} />
          {placeholder}
        </Card>
      )}
    </Droppable>
  );
};

export default ColumnDetails;
