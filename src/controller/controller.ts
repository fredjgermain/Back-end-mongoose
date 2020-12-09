import express, {Request, Response} from 'express'; 

const controller = express.Router(); 

function Access(req:Request, res:Response) { 
  return res.status(200).send("Api is ready"); 
} 

controller.get('', Access); 


