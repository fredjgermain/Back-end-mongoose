import mongoose from 'mongoose'; 
import { forms } from './forms.mockdata'; 
import { instructions } from './instructions.mockdata'; 
import { responses } from './responses.mockdata'; 
import { questions } from './questions.mockdata'; 
import { patients } from './patients.mockdata'; 
import { answers } from './answers.mockdata'; 

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



// ANSWERS -------------------------------------- 


export const datas = {collections, forms, instructions, responses, questions, patients, answers}; 
