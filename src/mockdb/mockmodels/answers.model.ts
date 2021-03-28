import { Schema } from 'mongoose'; 


// ANSWER ---------------------------------------
export const answers = { 
  _id: Schema.Types.ObjectId, 
  patient: { 
    type: Schema.Types.ObjectId, 
    ref: 'patients', 
    label: 'Patient', 
  }, 
  date: { 
    type: Date, 
  }, 
  question: { 
    type: Schema.Types.ObjectId, 
    ref: 'questions', 
    label: 'Question', 
    required: true, 
  }, 
  answer: { 
    type: Number, 
    label: 'Answer', 
  } 
}