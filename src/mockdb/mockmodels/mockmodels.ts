import { Schema } from 'mongoose'; 
import { answers } from './answers.model'; 
import { forms } from './forms.model'; 
import { instructions } from './instructions.model'; 
import { patients } from './patients.model'; 
import { questions } from './questions.model'; 
import { responses } from './responses.model'; 


// CollectionsSchema ----------------------------
const collections = { 
  _id: Schema.Types.ObjectId, 
  accessor: { 
    type: String, 
    label: 'Accessor', 
  }, 
  label: { 
    type: String, 
    label: 'Label', 
    abbrev: true, 
  } 
} 

export const models = {collections, 
  forms, 
  instructions, 
  responses, 
  questions, 
  patients, 
  answers}; 
