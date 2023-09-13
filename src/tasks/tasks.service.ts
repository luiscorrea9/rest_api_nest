import { Injectable } from '@nestjs/common';
import { first } from 'rxjs';
import { Task, TaskStatus} from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [{ 
        id:'1',
        title: "first task",
        description: "some task",
        status: TaskStatus.PENDING
    }]

  getAllTasks() {
    return this.tasks;
  }
  createTasks(title: string, description: string) {
    const task= {
        id: v4(),
        title,
        description,
        status: TaskStatus.PENDING
    }
    this.tasks.push(task)
    return task
  }
  updateTasks(id: string, updateField: UpdateTaskDto):Task {
        const task = this.getTaskById(id)
        const newTask = Object.assign(task, updateField)
        this.tasks =this.tasks.map(task => task.id === id ? newTask : task)
        return newTask;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id)
  }

  deleteTasks(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
}
