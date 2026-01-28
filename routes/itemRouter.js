import express from 'express';
import { getItem, goodItem, saveItem, searchItem } from '../controller/itemController.js';

const itemRouter = express.Router();   

itemRouter.get("/", getItem);
itemRouter.post("/", saveItem);
itemRouter.get("/good", goodItem);
itemRouter.get("/:name", searchItem);


export default itemRouter;
