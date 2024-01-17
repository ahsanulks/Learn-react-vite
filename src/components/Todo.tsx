import React, { ReactNode, useState } from 'react';
import Card from './Card';
import Button from './Button';
import Input from './Input';
import { Task, TaskBuilder } from '../data/task.class';

function Todo(): ReactNode {
    const [newTask, setNewTask] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([]);

    function addTask(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ): void {
        event.preventDefault();
        const task: Task = new TaskBuilder()
            .setName(newTask)
            .setCompleted(false)
            .build();

        setTasks((prevTasks) => [...prevTasks, task]);
        setNewTask('');
    }

    function completeTask(taskId: string): void {
        const updatedTask = tasks.map((task) => {
            if (task.id === taskId) {
                task.setStatus(!task.getStatus());
                return task;
            } else {
                return task;
            }
        });
        setTasks(updatedTask);
    }

    function removeTask(taskId: string): void {
        const updatedTask = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTask);
    }

    return (
        <Card>
            <Card.Title>Todo</Card.Title>
            <Card.Body>
                <div className='flex items-center gap-x-2'>
                    <Input
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <Button onClick={addTask} text={'Add task'} />
                </div>
                {tasks.length > 0 ? (
                    <ol className={'space-y-2 mt-4'}>
                        {tasks.map((task) => (
                            <li
                                key={task.id}
                                className={'flex items-center justify-between'}
                            >
                                <span>
                                    {task.name} {task.status()}
                                </span>
                                <div className={'flex items-center gap-x-2'}>
                                    <button
                                        onClick={() => completeTask(task.id)}
                                        className={'px-2 py-1 border text-xs'}
                                    >
                                        {task.getStatus()
                                            ? 'Not Completed'
                                            : 'Completed'}
                                    </button>
                                    <button
                                        onClick={() => removeTask(task.id)}
                                        className={'px-2 py-1 border text-xs'}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>
                ) : null}
            </Card.Body>
            <Card.Footer>You have {tasks.length} tasks.</Card.Footer>
        </Card>
    );
}

export default Todo;
