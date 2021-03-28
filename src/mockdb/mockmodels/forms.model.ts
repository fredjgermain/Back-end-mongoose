import { Schema } from 'mongoose'; 
import { ArrayLengthValidation } from './validation'; 


// FORM -----------------------------------------
export const forms = { 
  _id: Schema.Types.ObjectId, 
  fId: { 
    type: String, 
    label: 'Form Id', 
    abbrev: true, 
    required: true, 
  }, 
  titles: { 
    type: [String], 
    label: "Form's title", 
    validate: { 
      validator: (value:any) => ArrayLengthValidation(value, 1, undefined), 
      message: (prop:any) => 'array error', 
    } 
  }, 
} 