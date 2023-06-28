import { NotesRepository} from '../repository/notesRepository.js'
                
export class UpdateNote{
    constructor(noteId, noteUpdate){
        this.noteId = noteId;
        this.noteUpdate = noteUpdate;
        this.notesRepository = new NotesRepository()
    }

    async run(){
   
        try {
            await this.notesRepository.connect()
            const noteResult = await this.notesRepository.modify(this.noteId,this.noteUpdate)
            return noteResult;
          } catch (error) {
            console.error('Could not update the note', error);
            return null;
          } finally {
            await this.notesRepository.disconnect()
          }
    }


}