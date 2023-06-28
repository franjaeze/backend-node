import { NotesRepository} from '../repository/notesRepository.js'
                
export class DeleteNote{
    constructor(noteId){
        this.noteId = noteId;
        this.notesRepository = new NotesRepository()
    } 

    async run(){  
   
        try {
            await this.notesRepository.connect()
            const noteToDelete = await this.notesRepository.delete(this.noteId)
            return noteToDelete;
          } catch (error) {
            console.error('Error al buscar el usuario por ID:', error);
            return null;
          } finally {
            await this.notesRepository.disconnect()
          }
    }


}