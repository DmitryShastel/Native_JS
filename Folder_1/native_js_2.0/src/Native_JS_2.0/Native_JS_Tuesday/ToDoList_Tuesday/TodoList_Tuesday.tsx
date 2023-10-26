import React, {ChangeEvent} from 'react';
import {FilterType, TaskType} from "./App_Root_Tuesday";
import './ToDoList_Tuesday.css';
import {AddItemFormTuesday} from "./AddItemForm_Tuesday";

type ToDoListType = {
    todolistId: string
    title: string
    tasks: TaskType[]
    addTask: (todolistId: string, newTaskTitle: string) => void
    removeTask: (todolistId: string, taskId: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    changeTaskTitle: (taskId: string, title: string) => void
    changeFilter: (todolistId: string, value: FilterType) => void
    removeTodolist: (todolistId: string) => void
}


export const TodoListTuesday = (props: ToDoListType) => {

    // const onChangeTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }


    //change task title
    // const changeTaskTitleHandler = (taskId: string, newTitle: string) => {
    //     if (newTitle.trim() !== '') {
    //         props.changeTaskTitle(taskId, newTitle)
    //     }
    // }
    // const startEditingTask = (taskId: string) => {
    //     setEditingTaskId(taskId)
    // }
    // const stopEditingTask = () => {
    //     setEditingTaskId('');
    // }


    const removeTodolistHandler = () => {
        props.removeTodolist(props.todolistId)
    }

    const addTaskHandler = (newTitle: string) => {
        props.addTask(props.todolistId, newTitle)
    }

    //filter tasks
    const filterAllTasks = () => {
        props.changeFilter(props.todolistId, 'All')
    }
    const filterActiveTasks = () => {
        props.changeFilter(props.todolistId, 'Active')
    }
    const filterCompletedTasks = () => {
        props.changeFilter(props.todolistId, 'Completed')
    }


    return (
        <div>

            <h3>{props.title}
                <button onClick={removeTodolistHandler}>X</button>
            </h3>

            <AddItemFormTuesday callBack={addTaskHandler}/>


            {
                props.tasks.map((task) => {

                    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(props.todolistId, task.id, newIsDoneValue)
                    }

                    const removeTaskHandler = () => {
                        props.removeTask(props.todolistId, task.id)
                    }

                    return (
                        <ul key={task.id} style={{listStyleType: 'none'}}>
                            <li><input
                                checked={task.isDone}
                                type='checkbox'
                                onChange={changeTaskStatusHandler}
                            />

                                {task.title}
                                
                                <button onClick={removeTaskHandler}>X</button>
                            </li>
                        </ul>
                    )
                })
            }
            <button onClick={filterAllTasks}>All</button>
            <button onClick={filterActiveTasks}>Active</button>
            <button onClick={filterCompletedTasks}>Completed</button>
        </div>
    );
};