import { Schema } from 'mongoose'; 


// ANSWER ---------------------------------------
export const answers = { 
  _id: Schema.Types.ObjectId, 
  patient: { 
    type: Schema.Types.ObjectId, 
    ref: 'patients', 
    label: 'Patient', 
    abbrev: true, 
  }, 
  date: { 
    type: Date, 
    label: 'date', 
  }, 
  question: { 
    type: Schema.Types.ObjectId, 
    ref: 'questions', 
    label: 'Question', 
  }, 
  answer: { 
    type: Number, 
    label: 'Answer', 
  } 
}