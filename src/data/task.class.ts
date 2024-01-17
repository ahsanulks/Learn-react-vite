import { v4 as uuidv4 } from 'uuid';

class Task {
    id: string;
    name: string;
    completed: boolean;
    constructor(builder: TaskBuilder) {
        this.id = uuidv4();
        this.name = builder.name;
        this.completed = builder.completed;
    }

    status(): string {
        return this.completed ? 'Completed' : 'Incompleted';
    }

    setStatus(status: boolean): void {
        this.completed = status;
    }

    getStatus(): boolean {
        return this.completed;
    }
}

class TaskBuilder {
    name: string = '';
    completed: boolean = false;

    setName(name: string): TaskBuilder {
        this.name = name;
        return this;
    }

    setCompleted(completed: boolean): TaskBuilder {
        this.completed = completed;
        return this;
    }

    build(): Task {
        return new Task(this);
    }
}

export { Task, TaskBuilder };
