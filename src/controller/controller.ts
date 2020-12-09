import express, {Request, Response} from 'express'; 

function Access(req:Request, res:Response) { 
  return res.status(200).send("<1>Api is ready</h1>"); 
} 

function MakeController() { 
  const controller = express.Router(); 
  controller.get('/api/', Access); 
  return controller;
} 
const controller = MakeController(); 

export {controller}; 