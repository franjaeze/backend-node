import { NotesRepository} from '../repository/notesRepository.js'
                
export class SwitchStateNote{
    constructor(noteId, stateNote){
        this.noteId = noteId;
        this.stateNote = stateNote;
        this.notesRepository = new NotesRepository()
    } 

    async run(){  
   
        try {
            await this.notesRepository.connect()
            const patchNote = await this.notesRepository.switchState(this.noteId, this.stateNote)
            return patchNote;
          } catch (error) {
            console.error('Error al buscar el usuario por ID:', error);
            return null;
          } finally {
            await this.notesRepository.disconnect()
          }
    }


}