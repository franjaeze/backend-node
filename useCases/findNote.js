import { NotesRepository} from '../repository/notesRepository.js'
                
export class FindNote{
    constructor(noteId){
        this.noteId = noteId;
        this.notesRepository = new NotesRepository()
    }

    async run(){
   
        try {
            await this.notesRepository.connect()
            const noteToFind = await this.notesRepository.findById(this.noteId)
            return noteToFind;
          } catch (error) {
            console.error('Error al buscar el usuario por ID:', error);
            return null;
          } finally {
            await this.notesRepository.disconnect()
          }
    }


}