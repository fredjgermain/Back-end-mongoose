import CrudMongoose from '../crud/crudmongoose'; 
import mongoose from 'mongoose'; 
import { datas } from './mockdata/mockdata'; 
import { models } from './mockmodels/mockmodels'; 

//export const crud = new CrudMongoose(); 

/*const url = "mongodb+srv://admin:Ks6LwjuT2zewWcT@cluster0.m1ee1.mongodb.net/Cluster0?retryWrites=true&w=majority"; 
const dbName = 'TestDb'; 
crud.Connect(url, dbName); */ 


// MOCK -----------------------------------------
const collectionsMap = Object.keys(models).map( (collectionName:string) => { 
  const schema = new mongoose.Schema((models as {[key:string]:any})[collectionName]); 
  const data = (datas as {[key:string]:any})[collectionName]; 
  return {collectionName, schema, data}; 
}) 
/*const collectionsMap = [ 
  {collectionName:'collections', schema:new mongoose.Schema(collectionsSchema), data:mockCollection}, 
  {collectionName:'forms', schema:new mongoose.Schema(formsSchema), data:forms}, 
  {collectionName:'instructions', schema:new mongoose.Schema(instructionsSchema), data:instructions}, 
  {collectionName:'responses', schema:new mongoose.Schema(responsesSchema), data:responses}, 
  {collectionName:'questions', schema:new mongoose.Schema(questionsSchema), data:questions}, 
  {collectionName:'patients', schema:new mongoose.Schema(patientsSchema), data:patients}, 
  {collectionName:'answers', schema:new mongoose.Schema(answersSchema), data:answers}, 
  {collectionName:'appointments', schema:new mongoose.Schema(appointmentsSchema), data:appointments}, 
]; */


export async function MockData(crud:CrudMongoose) { 
  // register models
  collectionsMap.forEach( c => mongoose.model(c.collectionName, c.schema) ); 

  // empty each collection
  for(let i=0; i<collectionsMap.length; i++) { 
    await crud.Delete(collectionsMap[i].collectionName); 
  }

  for(let i=0; i<collectionsMap.length; i++) { 
    await crud.Create(collectionsMap[i].collectionName, collectionsMap[i].data); 
  } 

  const read = await crud.Read('responses'); 
  console.log(read); 
}
  /*const read = await crud.Read('appointments'); 
  console.log(read); */
  
  /*for(let i=0; i<collectionsMap.length; i++) { 
    const read = await crud.Read(collectionsMap[i].collectionName); 
  } 

  for(let i=0; i<collectionsMap.length; i++) { 
    const ids = await crud.Ids(collectionsMap[i].collectionName); 
    console.log(ids);
  } 

  for(let i=0; i<collectionsMap.length; i++) { 
    const collections = await crud.Collections(['questions', 'responses']); 
    console.log(collections); 
  } */
  
  

  /*const invalidForm = {
    _id: new mongoose.Types.ObjectId(), 
    fId: 'f1', 
    titles: ['form 1'] 
  } 
  const createInvalid = await crud.Create('forms', invalidForm); 
  console.log(createInvalid); */
// } 
