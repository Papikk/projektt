import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
function TodoList() {
    const [todos, setTodos] = useState([
        'Nauczyć się Reacta',
        'Zrobić zadanie domowe',
        'Powtórzyć JavaScript'
    ])
    console.log(todos)
return (
<section>
<TodoItem text="Nauczyć się Reacta" />
<TodoItem text="Zrobić zadanie domowe" />
<TodoItem text="Powtórzyć JavaScript" />
</section>
);
}
export default TodoList;

