import { Schema } from 'mongoose'; 
import { RamqValidation } from './validation';



// PATIENT --------------------------------------
export const patients = { 
  _id: Schema.Types.ObjectId, 
  firstName: { 
    type: String, 
    label: 'First name', 
    required: true, 
  }, 
  lastName: { 
    type: String, 
    label: 'Last name', 
    required: true, 
  }, 
  ramq: { 
    type: String, 
    abbrev: true, 
    label: 'Ramq', 
    required: [true, 'is required'], 
    regex: '^[a-zA-Z]{4}[0-9]{8}$', 
    validate: { 
      validator: RamqValidation, 
      message: (prop:any) => 'ramq error', 
    } 
  } 
}

