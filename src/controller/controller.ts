import express, {Request, Response} from 'express'; 

function Access(req:Request, res:Response) { 
  return res.status(200).send("Api is ready"); 
} 

function MakeController() { 
  const controller = express.Router(); 
  controller.get('/api/', Access); 
  return controller; 
} 
const controller = MakeController(); 

export {controller}; 