import { Column } from "./lib/types/types";
import Columns from "./components/Columns";
import { useState } from "react";
import { columnData } from "./lib/constants/taskList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
  const [columnsData, setColumnsData] = useState<Column[]>(columnData);

  const onDragEndHandler = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const updatedColumns = [...columnsData];
    const sourceColumn = updatedColumns.find(
      (column) => column.id === source.droppableId
    );
    const destinationColumn = updatedColumns.find(
      (column) => column.id === destination.droppableId
    );

    if (source.droppableId !== destination.droppableId) {
      const [selectedTask] = sourceColumn!.tasks.splice(source.index, 1);
      destinationColumn!.tasks.splice(destination.index, 0, selectedTask);
    } else {
      const [movedTask] = sourceColumn!.tasks.splice(source.index, 1);
      sourceColumn!.tasks.splice(destination.index, 0, movedTask);
    }

    setColumnsData(updatedColumns);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEndHandler}>
        <Columns columns={columnsData} />
      </DragDropContext>
    </>
  );
}

export default App;
