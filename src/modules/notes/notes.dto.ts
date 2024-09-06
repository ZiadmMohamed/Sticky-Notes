import { Prop } from "@nestjs/mongoose";
import { IsMongoId, IsOptional, MaxLength, MinLength } from "class-validator";

export class AddNoteDto{
    @MinLength(2)
    @MaxLength(200)
    title: string;

    @MinLength(2)
    @MaxLength(200)
    description: string;

    @IsMongoId()
    user: string;
    
}
export class paramDto{
    @IsMongoId()
    id: string;
}
export class updateNoteDto{

    @MinLength(2)
    @MaxLength(200)
    @IsOptional()
    title: string;

    @MinLength(2)
    @MaxLength(200)
    @IsOptional()
    description: string;

    @IsMongoId()
    @IsOptional()
    user: string;
}