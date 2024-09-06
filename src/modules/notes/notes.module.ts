import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Notes, NotesSchema } from 'src/core/schemas/notes.schema';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/core/guards/auth.guard';


@Module({
    imports: [MongooseModule.forFeature([{ name: Notes.name, schema: NotesSchema }]) ],
  providers: [NotesService ,JwtService,AuthGuard],
  controllers: [NotesController]
})
export class NotesModule {}
