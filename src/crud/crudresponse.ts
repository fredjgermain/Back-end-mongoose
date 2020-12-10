//import {Request, Response} from 'express'; 


interface IReq { 
  
} 

interface IErr { 
  [index:string]: { 
    properties:{ 
      message:any; 
    } 
  }; 
} 

interface IRes { 
  errors?:IErr; 
  message?:any; 
}


export enum EnumCrudAction { 
  CREATE = 'create', 
  READ = 'read', 
  UPDATE = 'update', 
  DELETE = 'delete', 
} 

// Crud Response ================================ 
export class CrudResponse { 
  public success: boolean = false; 
  public actionType: EnumCrudAction; 
  public data:any = {}; 
  public err:string[] = []; 

  constructor(action:EnumCrudAction, success?:boolean, data?:any, err?:IRes|string|string[]) { 
    this.actionType = action; 
    this.success = success ?? false; 
    this.data = data ?? {}; 
    if(err && typeof err != "string") 
      this.SetErrorMsgs(err as IRes); 
    else if(typeof err === "string") 
      this.err = [err]; 
    else if(Array.isArray(err) && typeof err[0] ==="string") 
      this.err = err; 
  } 

  // SetErrors: parse error messages from 'res' if there's any
  public SetErrorMsgs(res:IRes) { 
    if(res && res.errors) {
      const errors = Object.keys(res.errors).map( accessor => { 
        return res.errors ? res.errors[accessor]: {} as {properties:{message:any}}; 
      }); 
      this.err = errors.map(err => { 
        //console.log(err); 
        return err.properties ? err.properties.message: []; 
      }); 
    }
    else if(res && res.message) { 
      this.err = [res.message]; 
    } 
  } 
} 