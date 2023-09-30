import { Column, Task } from "../types/types";

export const taskData : Task[] = [
    { id: "task-1", task: "Buy groceries" },
    { id: "task-2", task: "Finish homework" },
    { id: "task-3", task: "Call mom" },
    { id: "task-4", task: "Go for a run" },
    { id: "task-5", task: "Read a book" },
    { id: "task-6", task: "Write a report" },
    { id: "task-7", task: "Clean the house" },
    { id: "task-8", task: "Attend a meeting" },
    {id : "task-9", task : "make project"},
    {id : "task-10", task : "travel junagarh"},
    {id : "task-11", task : "make new file"},
    {id : "task-12", task : "upload video"}
  ];

export const columnData : Column[] = [
    {
        id : "column-1",
        title : "today",
        tasks : ["task-1","task-2","task-3","task-4"]
    },
    {
        id : "column-2",
        title : "tomorrow",
        tasks : ["task-5","task-6","task-7","task-8"]
    },
    {
        id : "column-3",
        title : "Day after tomorrow",
        tasks : ["task-9", "task-10", "task-11", "task-12"]
    }
]
  