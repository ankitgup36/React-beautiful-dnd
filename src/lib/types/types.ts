export type Task = {
    id : string
    task : string
}

export type Column = {
    id : string,
    title : string,
    tasks : string[]
}

export enum DraggableIds {
    ColumnOne = 'column-1',
    ColumnTwo = 'column-2'
}