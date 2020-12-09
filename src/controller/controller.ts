import express, {Request, Response} from 'express'; 

function Access(req:Request, res:Response) { 
<<<<<<< HEAD
  return res.status(200).send("<h1>Api is ready</1>"); 
=======
  return res.status(200).send("<1>Api is ready</h1>"); 
>>>>>>> parent of 2ff06da... Installs
} 

function MakeController() { 
  const controller = express.Router(); 
  controller.get('/api/', Access); 
  return controller;
} 
const controller = MakeController(); 

export {controller}; 