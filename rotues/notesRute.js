import express from 'express'
import NotesController from '../controllers/notesController.js';

const router = express.Router();
const notesController = new NotesController;

router.get('/', notesController.getItems)

 
export default router;