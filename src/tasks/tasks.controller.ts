import { Controller, Get, Post, Body, Delete, Param, Patch} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){

    }
    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: createTaskDto){
        return this.tasksService.createTasks(newTask.title, newTask.description);
    }

    @Delete(":id")
    deleteTask(@Param('id') id: string){
        this.tasksService.deleteTasks(id);
    }

    @Patch(":id")
    updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto){
       this.tasksService.updateTasks(id, updatedFields);

    }
}
