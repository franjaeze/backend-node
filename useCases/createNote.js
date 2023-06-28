import { NotesRepository} from '../repository/notesRepository.js'

export class CreateNote{
    constructor(note){
        this.note = note;
        this.notesRepository = new NotesRepository()
    }

    async run(){
        await this.notesRepository.connect()
        let result = await this.notesRepository.save(this.note)
     
        await this.notesRepository.disconnect()

        return result
    }


}