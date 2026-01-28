import express from 'express';
import { deleteStudent, getStudent, saveStudent, studentSearch, updateStudent } from '../controller/studentController.js';

const studentRouter = express.Router();

studentRouter.get("/",getStudent);

studentRouter.post("/", saveStudent);

studentRouter.delete("/", deleteStudent);

studentRouter.put("/", updateStudent);

studentRouter.get("/search", studentSearch);

export default studentRouter;