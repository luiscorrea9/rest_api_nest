import { TaskStatus } from "../task.entity"
import {IsNotEmpty, IsOptional, IsString, MinLength, IsIn} from "class-validator"

export class createTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    title: string
    @IsString()
    description: string
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string
    @IsString()
    @IsOptional()
    description?: string
    @IsString() 
    @IsOptional()
    @IsIn([TaskStatus.IN_PROGRESS, TaskStatus.PENDING, TaskStatus.DONE])
    status?: TaskStatus
}