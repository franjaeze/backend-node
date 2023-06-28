import { NotesRepository} from '../repository/notesRepository.js'

export class GetNotes{
    constructor(){
        this.notesRepository = new NotesRepository()
    }

    async run(){
        await this.notesRepository.connect()
        const result = await this.notesRepository.list()
        await this.notesRepository.disconnect()

        return result
    }


}