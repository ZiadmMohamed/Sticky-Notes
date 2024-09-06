import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notes } from 'src/core/schemas/notes.schema';

@Injectable()
export class NotesService {
    constructor(@InjectModel(Notes.name) private NotesModel: Model<Notes>) {}


    addNote(note:any ){
        this.NotesModel.insertMany(note)
        return {msg:"success" , note}
    }
    async getAllNotes(){
    let note = await this.NotesModel.find()
        return {msg:"success" , note}
    }
 async   updateNote(note:any,id:any){
    let newNote = await    this.NotesModel.findByIdAndUpdate(id, note, { new: true })
        return {msg:"success" , newNote}
    }

   async delNotes(id:any){
  let note =  await this.NotesModel.findByIdAndDelete(id)
        return {msg:"success",note }
    }

}
