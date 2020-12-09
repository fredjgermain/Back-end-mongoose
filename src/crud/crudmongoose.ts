import mongoose, {Schema} from 'mongoose'; 
import {CrudResponse, EnumCrudAction} from './crudresponse'; 


export interface IEntry extends mongoose.Model<any, {}> { 
  _id: Schema.Types.ObjectId;
  [key:string]:any;
}

export default class CrudMongoose { 
  public url:string = ''; 
  public dbName: string = ''; 

  // Connect ....................................
  public async Connect(url:string, dbName:string) { 
    mongoose.connect( url, 
      { 
        useCreateIndex:true, 
        useNewUrlParser:true, 
        useUnifiedTopology:true, 
      }, 
      () => { 
        console.log('\x1b[32m', `Connected to mongoose to ${dbName} at ${url}`, '\x1b[0m'); 
      } 
    ) 
  } 


  private ToModel(modelName:string, item:any):IEntry { 
    const Model = this.Model(modelName); 
    let entry = {}; 
    //console.log(item); 
    if(!Object.keys(item).includes('_id') || !item['_id']) 
      entry = {_id: new mongoose.Types.ObjectId(), ...item}; 
    else 
      entry = item; 

    /*if(!Object.keys(item).includes('_id') || !item['_id']) 
      return new Model({_id: new mongoose.Types.ObjectId(), ...item}); 
    return new Model({item}); */
    return entry as IEntry; 
  }

  public ToModels(modelName:string, items:any):IEntry[] {
    if(Array.isArray(items)) 
      return items.map( i => this.ToModel(modelName, i)); 
    return [this.ToModel(modelName, items)]; 
  }

  // Register/Unregister ........................
  public RegisterModel(modelName:string, schema:mongoose.Schema) { 
    return mongoose.model(modelName, schema); 
  } 

  public UnregisterModel(modelName:string) { 
    mongoose.connection.collections[modelName].drop( err => { 
      console.log(`Collection: ${modelName} has been dropped`); 
    }); 
  } 

  // Model .......................................
  public Models() { 
    return mongoose.models; 
  } 

  public Model(modelName:string) { 
    //console.log(mongoose.models[modelName]); 
    return mongoose.models[modelName]; 
  } 


  // Create ....................................
  public async Create(modelName:string, datas:any):Promise<CrudResponse[]> { 
    const Model = this.Model(modelName); 

    //console.log(datas); 
    const toAdd = this.ToModels(modelName, datas); 
    //console.log(toAdd); 
    const responses:CrudResponse[] = []; 
    for(let i=0; i<toAdd.length; i++) { 
      await Model.insertMany(toAdd[i]) 
        .then( (res:any) => responses.push(new CrudResponse(EnumCrudAction.CREATE, true, res)) ) 
        .catch( (err:any) => responses.push(new CrudResponse(EnumCrudAction.CREATE, false, [], err)) ); 
    } 
    return responses; 
  } 

  // Read .......................................
  public async Read(modelName:string, ids?:string[]) { 
    const Model = this.Model(modelName); 
    const selector = ids && ids.length > 0 ? {_id: {$in: ids} }: {}; 
    return await Model.find(selector); 
  } 

  // Update .....................................
  public async Update(modelName:string, datas:any):Promise<CrudResponse[]> { 
    const Model = this.Model(modelName); 
    const toUpdate = this.ToModels(modelName, datas); 
    const responses:CrudResponse[] = []; 
    for(let i=0; i<toUpdate.length; i++) { 
      await Model.updateOne({_id: toUpdate[i]._id }, toUpdate[i]) 
        .then( (res:any) => responses.push(new CrudResponse(EnumCrudAction.UPDATE, true, toUpdate[i])) ) 
        .catch( (err:any) => responses.push(new CrudResponse(EnumCrudAction.UPDATE, false, [], err)) ); 
    } 
    return responses; 
  } 

  // Delete .....................................
  public async Delete(modelName:string, ids?:any):Promise<CrudResponse[]> { 
    const Model = this.Model(modelName); 
    const responses:CrudResponse[] = []; 
    const toDelete = await this.Read(modelName, ids); 
    if(toDelete.length === 0) 
      responses.push(new CrudResponse(EnumCrudAction.DELETE, false, ids, "Item.s could not be found.")); 
    for(let i=0; i<toDelete.length; i++) { 
      await Model.deleteMany(toDelete[i]) 
        .then( (res:any) => responses.push(new CrudResponse(EnumCrudAction.DELETE, true, toDelete[i])) ) 
        .catch( (err:any) => responses.push(new CrudResponse(EnumCrudAction.DELETE, false, [], err)) ); 
    } 
    return responses; 
  }
}