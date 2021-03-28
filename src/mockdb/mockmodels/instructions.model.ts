import { Schema } from 'mongoose'; 



// INSTRUCTION ----------------------------------
export const instructions = { 
  _id: Schema.Types.ObjectId, 
  iId: { 
    type: String, 
    label: 'Instruction Id', 
    abbrev: true, 
  }, 
  labels: { 
    type: [String], 
    label: "Instruction label", 
  }, 
} 
