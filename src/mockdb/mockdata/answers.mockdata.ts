import mongoose from 'mongoose'; 
import { patients } from './patients.mockdata'; 
import { questions } from './questions.mockdata'; 

// FORM -----------------------------------------
export const answers = [
  { 
    _id: new mongoose.Types.ObjectId(), 
    patient: patients[0], 
    //date: new Date(), 
    question: questions[0], 
    answer: -1, 
  }
] 