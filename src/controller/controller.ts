import express, {Request, Response} from 'express'; 
import CrudMongoose from '../crud/crudmongoose'; 
import {EnumCrudAction, CrudResponse} from '../crud/crudresponse'; 

// CONTROLLER ===================================
const crud:CrudMongoose = new CrudMongoose(); 

// Access ---------------------------------------
async function Access(req:Request, res:Response) { 
  return res.status(200).send("Access was successful"); 
} 

// Models --------------------------------------- 
async function Models(req:Request, res:Response) { 
  const {modelName} = req.params; 
  if(modelName === 'undefined') { 
    //console.log(modelName); 
    res.status(200).send(Object.keys(crud.Models()).map( s => s )); 
    return; 
  } 
  //console.log(modelName === 'undefined'); 
  res.status(200).send(crud.Model(modelName).schema); 
  //return res.status(200).send('no model');
} 

// Create .......................................
async function Create(req:Request, res:Response) { 
  if( !RequestBodyNotNull(EnumCrudAction.CREATE, req, res) 
    || !ModelNameIsFound(EnumCrudAction.CREATE, req, res) ) 
    return; 
  const {modelName} = req.params; 
  await crud.Create(modelName, req.body) 
    .then( response => res.status(200).send(response) ) 
    .catch( err => Error500(EnumCrudAction.CREATE, req, res, err, 'Creation failed') ); 
} 

// Read .........................................
async function Read(req:Request, res:Response) { 
  if(!ModelNameIsFound(EnumCrudAction.READ, req, res) ) 
    return; 
  const {modelName} = req.params; 
  const ids = ToIds(req.body); 
  return await crud.Read(modelName, ids)
    .then( response => res.status(200).send(response) )
    .catch( err => Error500(EnumCrudAction.READ, req, res, err, 'Read failed') );
} 

// Update .......................................
async function Update(req:Request, res:Response) { 
  if( !RequestBodyNotNull(EnumCrudAction.UPDATE, req, res) 
    || !ModelNameIsFound(EnumCrudAction.UPDATE, req, res) ) 
    return; 
  const {modelName} = req.params; 
  await crud.Update(modelName, req.body) 
    .then( response => res.status(200).send(response) ) 
    .catch( err => Error500(EnumCrudAction.UPDATE, req, res, err, 'Creation failed') ); 
} 

// Delete .......................................
async function Delete(req:Request, res:Response) { 
  if(!ModelNameIsFound(EnumCrudAction.DELETE, req, res) ) 
    return;
  const {modelName} = req.params; 
  await crud.Delete(modelName, ToIds(req.body)) 
    .then( response => res.status(200).send(response) ) 
    .catch( err => Error500(EnumCrudAction.DELETE, req, res, err, 'Creation failed') ); 
} 

function RequestBodyNotNull(action:EnumCrudAction, req:Request, res:Response) { 
  if(IsNullOrEmpty(req) || IsNullOrEmpty(req.body)) { 
    const crudErr = new CrudResponse(action, false, req.body); 
    crudErr.err = ["Request's body can not be empty!"]; 
    res.status(400).send(crudErr); 
    return false; 
  } 
  return true; 
} 

function ModelNameIsFound(action:EnumCrudAction, req:Request, res:Response) { 
  const {modelName} = req.params; 
  if(!crud.Model(modelName)) { 
    const crudErr = new CrudResponse(action, false, req.body); 
    crudErr.err = ["Model name could not be found"]; 
    res.status(400).send(crudErr); 
    return false; 
  } 
  return true; 
} 

/* Error500 => Send(Response) 
  To be called in a "catch" causing error '500' 
*/ 
function Error500(action:EnumCrudAction, req:Request, res:Response, err:any, errmsg:any) { 
  const crudRes = new CrudResponse(action); 
  crudRes.data = req.body; 
  crudRes.err = [errmsg, err.message]; 
  res.status(500).send(crudRes); 
} 

function IsObject(obj:any) { 
  return typeof obj === "object" && !Array.isArray(obj); 
} 
/**/
function IsNullOrEmpty(obj:any) { 
  if(obj === undefined || obj === null || obj === '') 
    return true; 
  if( Array.isArray(obj) && obj.length === 0 ) 
    return true; 
  if( IsObject(obj) && Object.keys(obj).length === 0 ) 
    return true; 
  return false; 
} 

function ToIds(toIds:any) { 
  if(!toIds || toIds.length === 0 || Object.keys(toIds).length === 0 ) 
    return []; 
  if(Array.isArray(toIds)) { 
    if(toIds[0]._id) 
      return toIds.map( e => e._id ); 
  } 
  if(Object.keys(toIds).includes('_id')) 
    return toIds['_id']; 
  return [toIds]; 
}



export function MakeController(url:string, dbName:string, MockData?:(crud:CrudMongoose)=>void) { 
  crud.Connect(url, dbName); 
  if(MockData) 
    MockData(crud); 
  const router = express.Router(); 
  router.get('/api/', Access); 
  router.get("/api/models/:modelName", Models); 
  router.post('/api/:modelName/create', Create); 
  router.put('/api/:modelName/read', Read); 
  router.put('/api/:modelName/update', Update); 
  router.put('/api/:modelName/delete', Delete); 
  return router; 
} 