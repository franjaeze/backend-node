import express from 'express'
import NotesController from '../controllers/notesController.js';

const router = express.Router();
const notesController = new NotesController;

router.get('/', notesController.getItems)
 
router.get('/:id', notesController.getItem)

router.post('/', notesController.createItem)

router.put('/:id', notesController.updateItem); // ********** el PUT debe enviarse sin id ***********

router.delete('/:id', notesController.deleteItem);
 
export default router;