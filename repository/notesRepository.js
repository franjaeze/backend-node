import {Mongo_dao} from './mongo_dao.js'

export class NotesRepository{


    constructor(){
        this.notes = new Mongo_dao();
    }

   
    async connect() {
        await this.notes.connect('notes')
    }


    async disconnect() {
        await this.notes.disconnect('notes')
    }

/* 
    existeDNI(dni = null) {
        return this.notes.existeDNI(dni);
    } */


    save(note) {
        return this.notes.save(note)
    }


    delete(id) {
        return this.notes.remove(id)
    }


    modify(id, noteModify = {}) {
        return this.notes.update(id, noteModify)
    }


    findById(id = null) {
        return this.notes.search(id)
    }


    list() {
        return this.notes.getAll();
    }
}