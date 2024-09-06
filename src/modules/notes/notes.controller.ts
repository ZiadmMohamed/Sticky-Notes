import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { NotesService } from './notes.service';
import {  AddNoteDto, paramDto } from './notes.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('notes')
@UseGuards(AuthGuard)
export class NotesController {
    constructor(private _NotesService:NotesService){}

    @Post()
    addNote(@Body() body:AddNoteDto){

        return this._NotesService.addNote(body)
    }
    
    @Get()
    getAllNotes(){
        return this._NotesService.getAllNotes()
    }

    @Put("/:id")
    updateNote(@Body() body:any,@Param() param:paramDto){

        return this._NotesService.updateNote(body,param.id)
    }

    @Delete("/:id")
    delNote(@Param() Param:paramDto){
        return this._NotesService.delNotes(Param.id)
    }

}
