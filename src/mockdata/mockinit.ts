import CrudMongoose from '../crud/crudmongoose'; 
import mongoose from 'mongoose'; 
import {mockCollection, forms, instructions, responses, questions, patients} from './mockdata'; 
import {collectionsSchema, formsSchema, instructionsSchema, 
  responsesSchema, questionsSchema, patientsSchema} from './mockmodels'; 

//export const crud = new CrudMongoose(); 

/*const url = "mongodb+srv://admin:Ks6LwjuT2zewWcT@cluster0.m1ee1.mongodb.net/Cluster0?retryWrites=true&w=majority"; 
const dbName = 'TestDb'; 
crud.Connect(url, dbName); */ 


// MOCK -----------------------------------------
const collectionsMap = [ 
  {collectionName:'forms', schema:new mongoose.Schema(formsSchema), data:forms}, 
  {collectionName:'instructions', schema:new mongoose.Schema(instructionsSchema), data:instructions}, 
  {collectionName:'responses', schema:new mongoose.Schema(responsesSchema), data:responses}, 
  {collectionName:'questions', schema:new mongoose.Schema(questionsSchema), data:questions}, 
  {collectionName:'collections', schema:new mongoose.Schema(collectionsSchema), data:mockCollection}, 
  {collectionName:'patients', schema:new mongoose.Schema(patientsSchema), data:patients}, 
]; 


export async function MockData(crud:CrudMongoose) { 
  // register models
  collectionsMap.forEach( c => mongoose.model(c.collectionName, c.schema) ); 

  // empty each collection
  for(let i=0; i<collectionsMap.length; i++) { 
    await crud.Delete(collectionsMap[i].collectionName); 
  }

  for(let i=0; i<collectionsMap.length; i++) { 
    const create = await crud.Create(collectionsMap[i].collectionName, collectionsMap[i].data); 
  } 

  for(let i=0; i<collectionsMap.length; i++) { 
    const read = await crud.Read(collectionsMap[i].collectionName); 
    //console.log(read.length); 
  } 
} 
