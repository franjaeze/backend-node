
import { GetNotes } from '../useCases/getNotes.js'
import { CreateNote } from '../useCases/createNote.js'
import { FindNote } from '../useCases/findNote.js'
import { UpdateNote } from '../useCases/updateNote.js'
import { DeleteNote } from '../useCases/deleteNote.js'
import { SwitchStateNote } from '../useCases/switchStateNote.js'

export default class NotesController {
    constructor() {
      this.header = { 'content-type': 'application/json' }
      this.body = {}
    }


        getItems = async (req, res) => {
        try {
          //const data = await notesModel.find() esto si se hace directo con MONGOOSE

          const reqItems = new GetNotes()
          const resultado = await reqItems.run()
          res.status(200).json(resultado);
        } catch (error) {
          console.log(error);
          res.status(500).json({ mensaje: 'Error al obtener los empleados' });
        }
      };

      getItem = async (req, res) => {
        try {
          const noteId = req.params.id;
          const find = new FindNote(noteId)
          const result = await find.run() 
          res.status(200).json(result);
        } catch (error) {
          console.log(error);
          res.status(500).json({ mensaje: 'Error al obtener los empleados' });
        }
      };

      createItem = async (req, res) => {
        try {
          // const result = await notesModel.create(body)  esto si fuese MONGOOSE
          const { body } = req /// destructuro, dela req solo quiero el body
          const create = new CreateNote(body)
          const result = await create.run()
            console.log(body)

          res.status(200).json(body);
        } catch (error) {
          console.log(error);
          res.status(500).json({ mensaje: 'Error al obtener los empleados' });
        }
      };
    
      updateItem = async (req, res) => {
        try {
          const noteId = req.params.id;
          const noteUpdate = req.body;
           const update = new UpdateNote(noteId, noteUpdate)
          const result = await update.run()  
          res.status(200).json(result);
        } catch (error) {
          console.log(error);
          res.status(500).json({ mensaje: 'Could not update note' });
        }
      };

      deleteItem = async (req, res) => {
        try {
          const noteId = req.params.id;
           const deleteNote = new DeleteNote(noteId)
          const result = await deleteNote.run() 
          res.status(200).json(result);
        } catch (error) {
          console.log(error);
          res.status(500).json({ mensaje: 'Could not delte the note' });
        }
      };

    switchStateItem = async (req, res) => {
        try {
          const noteId = req.params.id;
          const stateNote = req.body;
           const patchNote = new SwitchStateNote(noteId, stateNote)
          const result = await patchNote.run() 
          res.status(200).json(result);
        } catch (error) {
          console.log(error);
          res.status(500).json({ mensaje: 'Could not delte the note' });
        }
      };

}