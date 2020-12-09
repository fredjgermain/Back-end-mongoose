import express, {Request, Response} from 'express'; 
import CrudMongoose from '../crud/crudmongoose'; 
import {EnumCrudAction, CrudResponse} from '../crud/crudresponse'; 

// CONTROLLER ===================================
export class Controller{ 
  public crud:CrudMongoose = new CrudMongoose(); 

  constructor(url:string, dbName:string) { 
    this.crud.Connect(url, dbName); 
  }


  // Access ---------------------------------------
  public async Access(req:Request, res:Response) { 
    const read = this === undefined; 
    return res.status(200).send(read); 
  } 
  
  // Models --------------------------------------- 
  public async Models(req:Request, res:Response) { 
    const {modelName} = req.params; 
    if(modelName === 'undefined') { 
      //console.log(modelName); 
      res.status(200).send(Object.keys(this.crud.Models()).map( s => s )); 
      return; 
    } 
    //console.log(modelName === 'undefined'); 
    res.status(200).send(this.crud.Model(modelName).schema); 
    //return res.status(200).send('no model');
  } 
  
  // Create .......................................
  public async Create(req:Request, res:Response) { 
    if( !this.RequestBodyNotNull(EnumCrudAction.CREATE, req, res) 
      || !this.ModelNameIsFound(EnumCrudAction.CREATE, req, res) ) 
      return; 
    const {modelName} = req.params; 
    await this.crud.Create(modelName, req.body) 
      .then( response => res.status(200).send(response) ) 
      .catch( err => this.Error500(EnumCrudAction.CREATE, req, res, err, 'Creation failed') ); 
  } 
  
  // Read .........................................
  public async Read(req:Request, res:Response) { 
    if(!this.ModelNameIsFound(EnumCrudAction.READ, req, res) ) 
      return; 
    const {modelName} = req.params; 
    const ids = this.ToIds(req.body); 
    return await this.crud.Read(modelName, ids)
      .then( response => res.status(200).send(response) )
      .catch( err => this.Error500(EnumCrudAction.READ, req, res, err, 'Read failed') );
  } 
  
  // Update .......................................
  public async Update(req:Request, res:Response) { 
    if( !this.RequestBodyNotNull(EnumCrudAction.UPDATE, req, res) 
      || !this.ModelNameIsFound(EnumCrudAction.UPDATE, req, res) ) 
      return; 
    const {modelName} = req.params; 
    await this.crud.Update(modelName, req.body) 
      .then( response => res.status(200).send(response) ) 
      .catch( err => this.Error500(EnumCrudAction.UPDATE, req, res, err, 'Creation failed') ); 
  } 
  
  // Delete .......................................
  public async Delete(req:Request, res:Response) { 
    if(!this.ModelNameIsFound(EnumCrudAction.DELETE, req, res) ) 
      return;
    const {modelName} = req.params; 
    await this.crud.Delete(modelName, this.ToIds(req.body)) 
      .then( response => res.status(200).send(response) ) 
      .catch( err => this.Error500(EnumCrudAction.DELETE, req, res, err, 'Creation failed') ); 
  } 
  
  private RequestBodyNotNull(action:EnumCrudAction, req:Request, res:Response) { 
    if(this.IsNullOrEmpty(req) || this.IsNullOrEmpty(req.body)) { 
      const crudErr = new CrudResponse(action, false, req.body); 
      crudErr.err = ["Request's body can not be empty!"]; 
      res.status(400).send(crudErr); 
      return false; 
    } 
    return true; 
  } 
  
  private ModelNameIsFound(action:EnumCrudAction, req:Request, res:Response) { 
    const {modelName} = req.params; 
    if(!this.crud.Model(modelName)) { 
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
  private Error500(action:EnumCrudAction, req:Request, res:Response, err:any, errmsg:any) { 
    const crudRes = new CrudResponse(action); 
    crudRes.data = req.body; 
    crudRes.err = [errmsg, err.message]; 
    res.status(500).send(crudRes); 
  } 
  
  private IsObject(obj:any) { 
    return typeof obj === "object" && !Array.isArray(obj); 
  } 
  /**/
  private IsNullOrEmpty(obj:any) { 
    if(obj === undefined || obj === null || obj === '') 
      return true; 
    if( Array.isArray(obj) && obj.length === 0 ) 
      return true; 
    if( this.IsObject(obj) && Object.keys(obj).length === 0 ) 
      return true; 
    return false; 
  } 
  
  private ToIds(toIds:any) { 
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
}

function MakeController(url:string, dbName:string, MockData?:(crud:CrudMongoose)=>void) { 
  const ctrl = new Controller(url, dbName); 
  if(MockData) 
    MockData(ctrl.crud); 
  const router = express.Router(); 
  router.get('/api/', ctrl.Access); 
  router.get("/api/models/:modelName", ctrl.Models); 
  router.post('/api/:modelName/create', ctrl.Create); 
  router.put('/api/:modelName/read', ctrl.Read); 
  router.put('/api/:modelName/update', ctrl.Update); 
  router.put('/api/:modelName/delete', ctrl.Delete); 
  return router; 
} 

export {MakeController}; 