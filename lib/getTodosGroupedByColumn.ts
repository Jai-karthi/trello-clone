import { databases } from 'appwrite';


export const getTodosGroupedByColumns = async () => {
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID
    );

    const todos = data.documents;

    console.log(todos)
             
    const columns = todos.reduce((acc:any, todo:any) => {
        if (!acc.get(todo.status)) {
            acc.set(todo.status, {
                id: todo.status,
                todos: [],
            })
        }

        acc.get(todo.status)!.todos.push({
            $id: todo.$id,
            $createdAt: todo.$createdAt,
            title: todo.title,
            status: todo.status,
            ...(todo.image && { image: JSON.parse(todo.image) })
        });

        return acc
    }, new Map<TypedColumn, Column>())
    console.log(columns)
    const columnTypes: TypedColumn[] = ["todo", "inprogress", "done"];

    for (const columnType of columnTypes) {
        if (!columns.get(columnType)) {
            columns.set(columnType, {
                id: columnType,
                todos: []
            })
        }
    }



    const sortedColumns: Map<TypedColumn, Column> = new Map(
        [...columns.entries()].sort((a, b) => (
            columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
        ))
    )


    const board: Board = {
        columns: sortedColumns
    }

    return board
}

