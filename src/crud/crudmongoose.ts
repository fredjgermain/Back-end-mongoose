import mongoose, {Schema} from 'mongoose'; 
import {CrudResponse, EnumCrudAction} from './crudresponse'; 


export interface IEntry extends mongoose.Model<any, {}> { 
  _id: Schema.Types.ObjectId;
  [key:string]:any;
}

// Crud Mongoose ================================ 
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


  // Collections .......................................... 
  public async Collections(acccessors:string[]): Promise<CrudResponse[]> { 
    const collections = [] as CrudResponse[]; 
    for(let i=0; i<acccessors.length; i++) { 
      const collection = await this.Collection(acccessors[i]); 
      collections.push(collection); 
    } 
    return collections; 
  } 
  
  // Collection ...........................................
  public async Collection(modelName:string):Promise<CrudResponse> { 
    const collections = await this.Find('collections'); 
    const found = collections.find(c => c['accessor'] === modelName); 
    const fields = this.Model(modelName).schema.paths; 
    const entries = await this.Find(modelName); 
    const data = {accessor:found['accessor'], label:found['label'], fields, entries}; 
    return new CrudResponse(EnumCrudAction.READ, true, data); 
  } 

  // Validate ............................................. 
  public async Validate(modelName:string, entries:IEntry[]) { 
    /*const Model = this.Model(modelName); 
    const toValidate = this.ToModels(modelName, entries); */
    const responses = [] as CrudResponse[]; 

    /*for(let i=0; i<toValidate.length; i++) { 
      await Model.insertMany(toValidate[i]) 
        .then( (res:any) => responses.push(new CrudResponse(EnumCrudAction.CREATE, true, res[0])) ) 
        .catch( (err:any) => responses.push(new CrudResponse(EnumCrudAction.CREATE, false, toValidate[i], err)) ); 
    } */ 
    return responses; 
  } 

  // Ids .................................................. 
  public async Ids(modelName:string): Promise<string[]> { 
    const entries = await this.Find(modelName); 
    return entries.map(e => e['_id']); 
  } 

  // Create ....................................
  public async Create(modelName:string, entries:any[]):Promise<CrudResponse[]> { 
    const Model = this.Model(modelName); 
    const toAdd = this.ToModels(modelName, entries); 
    const responses:CrudResponse[] = []; 
    for(let i=0; i<toAdd.length; i++) { 
      await Model.insertMany(toAdd[i]) 
        .then( (res:any) => responses.push(new CrudResponse(EnumCrudAction.CREATE, true, res[0])) ) 
        .catch( (err:any) => responses.push(new CrudResponse(EnumCrudAction.CREATE, false, toAdd[i], err)) ); 
    } 
    return responses; 
  } 

  // Find .......................................
  private async Find(modelName:string, ids?:string[]) { 
    const Model = this.Model(modelName); 
    const selector = ids && ids.length > 0 ? {_id: {$in: ids} }: {}; 
    return await Model.find(selector); 
  } 

  // Read .......................................
  public async Read(modelName:string, ids?:string[]) { 
    const Model = this.Model(modelName); 
    const found = await this.Find(modelName, ids); 
    return found.map( data => new CrudResponse(EnumCrudAction.READ, true, data)); 
  } 

  // Update .....................................
  public async Update(modelName:string, entries:any[]):Promise<CrudResponse[]> { 
    const Model = this.Model(modelName); 
    const toUpdate = this.ToModels(modelName, entries); 
    const responses:CrudResponse[] = []; 
    for(let i=0; i<toUpdate.length; i++) { 
      await Model.updateOne({_id: toUpdate[i]._id }, toUpdate[i]) 
        .then( (res:any) => responses.push(new CrudResponse(EnumCrudAction.UPDATE, true, toUpdate[i])) ) 
        .catch( (err:any) => responses.push(new CrudResponse(EnumCrudAction.UPDATE, false, toUpdate[i], err)) ); 
    } 
    return responses; 
  } 

  // Delete .....................................
  public async Delete(modelName:string, entries?:any[]):Promise<CrudResponse[]> { 
    const Model = this.Model(modelName); 
    const responses:CrudResponse[] = []; 
    const ids = entries?.map(e => e._id); 
    const toDelete = ids ? await this.Find(modelName, ids): await this.Find(modelName); 

    const foundIds = toDelete.map(e=> JSON.stringify(e._id)); 
    const notFound = entries?.filter(e => { 
      return !foundIds.includes(JSON.stringify(e._id)); 
    }) ?? []; 

    // Delete specified items 
    for(let i=0; i<toDelete.length; i++) { 
      await Model.deleteMany(toDelete[i]) 
        .then( (res:any) => responses.push(new CrudResponse(EnumCrudAction.DELETE, true, toDelete[i])) ) 
        .catch( (err:any) => responses.push(new CrudResponse(EnumCrudAction.DELETE, false, toDelete[i], err)) ); 
    } 
    for(let i=0; i<notFound.length; i++) { 
      responses.push(new CrudResponse(EnumCrudAction.DELETE, false, notFound[i], 'Item could not be found.')); 
    } 
    return responses; 
  }
  

  // =======================================================
  //private IdExist(modelName:string, )

  private ToModel(modelName:string, item:any):IEntry { 
    const Model = this.Model(modelName); 
    let entry = {}; 
    if(!Object.keys(item).includes('_id') || !item['_id']) 
      entry = {_id: new mongoose.Types.ObjectId(), ...item}; 
    else 
      entry = item; 
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
  public Model(modelName:string) { 
    return mongoose.models[modelName]; 
  } 


}
