import mongoose from 'mongoose'; 
import { forms } from './mockform'; 
import { instructions } from './mockinstructions'; 
import { responses } from './mockresponses'; 
import { questions } from './mockquestions'; 


// Mock Collections -----------------------------
const collections = [ 
  { 
    _id: new mongoose.Types.ObjectId(), 
    accessor:'responses', 
    label:'Responses', 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    accessor:'instructions', 
    label:'Instructions', 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    accessor:'forms', 
    label:'Forms', 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    accessor:'questions', 
    label:'Questions', 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    accessor:'patients', 
    label:'Patients', 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    accessor:'answers', 
    label:'Answers', 
  }, 
]; 


// PATIENTS -------------------------------------
const patients = [
  {
    _id: new mongoose.Types.ObjectId(), 
    firstName: 'Frédéric', 
    lastName: 'Jean-Germain', 
    ramq: 'JEAF83112314', 
  }
]

// ANSWERS -------------------------------------- 
const answers:any[] = []; 


export const datas = {collections, forms, instructions, responses, questions, patients, answers}; 
